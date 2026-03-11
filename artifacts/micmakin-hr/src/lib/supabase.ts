const SUPABASE_URL = 'https://betgdeqmkkayysqwwcic.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJldGdkZXFta2theXlzcXd3Y2ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3OTgxNTgsImV4cCI6MjA4ODM3NDE1OH0.yD2ES8UoEuN1Je8he6169RNCgnoOwIR_qJGkc01bi08';

// Direct REST helper — matches the original app's approach, bypasses JS client RLS quirks
export const sbFetch = (path: string, opts: RequestInit = {}) =>
  fetch(SUPABASE_URL + '/rest/v1/' + path, {
    ...opts,
    headers: {
      apikey: SUPABASE_ANON,
      Authorization: 'Bearer ' + SUPABASE_ANON,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...(opts.headers || {}),
    },
  });

export async function dbSelect(table: string, params = ''): Promise<any[]> {
  const r = await sbFetch(table + (params ? '?' + params : ''), {
    method: 'GET',
    headers: { Prefer: '' },
  });
  if (!r.ok) { console.error('dbSelect', table, await r.text()); return []; }
  return r.json();
}

export async function dbInsertRow(table: string, row: any): Promise<any> {
  const r = await sbFetch(table, { method: 'POST', body: JSON.stringify(row) });
  if (!r.ok) { console.error('dbInsert', table, await r.text()); return null; }
  return r.json();
}

export async function dbUpsertRow(table: string, row: any): Promise<any> {
  const r = await sbFetch(table, {
    method: 'POST',
    body: JSON.stringify(row),
    headers: { Prefer: 'resolution=merge-duplicates,return=representation' },
  });
  if (!r.ok) { console.error('dbUpsert', table, await r.text()); return null; }
  return r.json();
}

export async function dbUpdateRow(table: string, id: string | number, updates: any): Promise<any> {
  const r = await sbFetch(table + '?id=eq.' + id, {
    method: 'PATCH',
    body: JSON.stringify(updates),
  });
  if (!r.ok) { console.error('dbUpdate', table, await r.text()); return null; }
  return r.json();
}

export async function dbDeleteRow(table: string, id: string | number): Promise<boolean> {
  const r = await sbFetch(table + '?id=eq.' + id, {
    method: 'DELETE',
    headers: { Prefer: '' },
  });
  return r.ok;
}

export async function logAudit(action: string, entity: string, entityId: string, detail: string, userEmail = 'system'): Promise<void> {
  try {
    await sbFetch('audit_log', {
      method: 'POST',
      headers: { Prefer: '' },
      body: JSON.stringify({ user_email: userEmail, action, entity, entity_id: String(entityId || ''), detail }),
    });
  } catch (e) { console.warn('logAudit failed', e); }
}
