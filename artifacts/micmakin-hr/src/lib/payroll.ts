export function calculatePayroll(employee: any, daysInMonth: number, presentDays: number) {
  const baseSalary = Number(employee.base_salary) || 0;
  
  // Basic calculations based on Nigerian payroll standard
  const basic = baseSalary * 0.4;
  const housing = baseSalary * 0.2;
  const transport = baseSalary * 0.2;
  const utilities = baseSalary * 0.1;
  const meal = baseSalary * 0.1;
  
  // Prorate if not present all days
  const prorationFactor = presentDays / daysInMonth;
  const grossPay = baseSalary * prorationFactor;
  
  // Deductions
  const pension = basic * housing * transport * 0.08; // 8% of Basic + Housing + Transport
  const nhf = basic * 0.025; // 2.5% of Basic
  
  // Mock PAYE Tax (Simplified)
  const taxableIncome = grossPay - pension - nhf;
  const paye = taxableIncome * 0.15; // Mock 15% flat rate
  
  const totalDeductions = pension + nhf + paye;
  const netPay = grossPay - totalDeductions;
  
  return {
    grossPay,
    basic,
    housing,
    transport,
    utilities,
    meal,
    pension,
    nhf,
    paye,
    totalDeductions,
    netPay
  };
}
