import { dbSelect } from './supabase';

export async function fetchEmployees() {
  return await dbSelect('employees');
}

export async function fetchLeaveRequests() {
  return await dbSelect('leave_requests');
}

export async function fetchPayrollRuns() {
  return await dbSelect('payroll_runs');
}

export async function fetchSubsidiaries() {
  return await dbSelect('subsidiaries');
}
