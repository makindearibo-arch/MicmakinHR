import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://betgdeqmkkayysqwwcic.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJldGdkZXFta2theXlzcXd3Y2ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3OTgxNTgsImV4cCI6MjA4ODM3NDE1OH0.yD2ES8UoEuN1Je8he6169RNCgnoOwIR_qJGkc01bi08';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

export async function dbSelect(table: string, columns: string = '*', eq?: { column: string; value: any }) {
  let query = supabase.from(table).select(columns);
  if (eq) {
    query = query.eq(eq.column, eq.value);
  }
  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function dbInsertRow(table: string, row: any) {
  const { data, error } = await supabase.from(table).insert([row]).select();
  if (error) throw error;
  return data;
}

export async function dbUpsertRow(table: string, row: any) {
  const { data, error } = await supabase.from(table).upsert([row]).select();
  if (error) throw error;
  return data;
}

export async function dbUpdateRow(table: string, id: string | number, updates: any) {
  const { data, error } = await supabase.from(table).update(updates).eq('id', id).select();
  if (error) throw error;
  return data;
}

export async function dbDeleteRow(table: string, id: string | number) {
  const { error } = await supabase.from(table).delete().eq('id', id);
  if (error) throw error;
  return true;
}

export async function logAudit(action: string, details: string, user: string) {
  try {
    await supabase.from('audit_logs').insert([
      { action, details, user_email: user, created_at: new Date().toISOString() }
    ]);
  } catch (err) {
    console.error("Failed to log audit", err);
  }
}
