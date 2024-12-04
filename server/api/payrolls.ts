interface Payrolls {
  employeeId: number
  month: string
  year: number
  baseSalary: number
  bonuses: number
  deduction: number
  netSalary: number
}

export default defineEventHandler((): Payrolls[] => {
  return [
    { employeeId: 1, month: 'January', year: 2024, baseSalary: 5000, bonuses: 500, deductions: 200, netSalary: 5300 },
    { employeeId: 2, month: 'January', year: 2024, baseSalary: 6000, bonuses: 600, deductions: 250, netSalary: 5850 },
    { employeeId: 3, month: 'January', year: 2024, baseSalary: 4500, bonuses: 300, deductions: 150, netSalary: 4650 },
    { employeeId: 4, month: 'January', year: 2024, baseSalary: 4000, bonuses: 400, deductions: 100, netSalary: 4300 },
  ]
})
