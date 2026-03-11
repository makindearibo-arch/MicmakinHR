import { dbSelect } from './supabase';

const PBKDF2_ITERATIONS = 100000;
const PBKDF2_PREFIX = '$webcrypto$';

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  if (!stored) return false;
  // Plain text fallback for legacy accounts
  if (!stored.startsWith(PBKDF2_PREFIX) && !stored.startsWith('$pbkdf2$')) {
    return password === stored;
  }
  try {
    const parts = stored.split('$');
    // Format: $webcrypto$iterations$salt$hash → ['','webcrypto','iterations','salt','hash']
    if (parts.length !== 5) return password === stored;
    const iterations = parseInt(parts[2]);
    const saltHex = parts[3];
    const storedHash = parts[4];
    const salt = new Uint8Array((saltHex.match(/.{2}/g) || []).map(b => parseInt(b, 16)));
    const keyMaterial = await crypto.subtle.importKey(
      'raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']
    );
    const bits = await crypto.subtle.deriveBits(
      { name: 'PBKDF2', hash: 'SHA-256', salt, iterations },
      keyMaterial, 256
    );
    const hashHex = Array.from(new Uint8Array(bits)).map(b => b.toString(16).padStart(2, '0')).join('');
    if (hashHex.length !== storedHash.length) return false;
    let diff = 0;
    for (let i = 0; i < hashHex.length; i++) diff |= hashHex.charCodeAt(i) ^ storedHash.charCodeAt(i);
    return diff === 0;
  } catch (e) {
    console.error('verifyPassword error:', e);
    return password === stored;
  }
}

export async function loginFromDB(email: string, password: string): Promise<any | null> {
  const rows = await dbSelect('system_users', `email=eq.${encodeURIComponent(email)}&status=eq.active&limit=1`);
  if (!rows || !rows[0]) return null;
  const user = rows[0];
  const valid = await verifyPassword(password, user.password);
  return valid ? user : null;
}

export async function restoreSession(id: number, email: string): Promise<any | null> {
  const rows = await dbSelect('system_users', `id=eq.${id}&email=eq.${encodeURIComponent(email)}&status=eq.active&limit=1`);
  return rows && rows[0] ? rows[0] : null;
}

export function setSession(user: any): void {
  try { localStorage.setItem('mhr_session', JSON.stringify({ id: user.id, email: user.email })); } catch {}
}

export function getStoredSession(): { id: number; email: string } | null {
  try {
    const s = localStorage.getItem('mhr_session');
    return s ? JSON.parse(s) : null;
  } catch { return null; }
}

export function clearSession(): void {
  try { localStorage.removeItem('mhr_session'); } catch {}
}
