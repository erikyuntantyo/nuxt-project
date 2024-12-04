interface Employee {
  id: number
  name: string
  position: string
  email: string
  phone: string
}

export default defineEventHandler((): Employee[] => {
  return [
    { id: 1, name: 'John Doe', position: 'Software Engineer', baseSalary: 5000 },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', baseSalary: 6000 },
    { id: 3, name: 'Sam Wilson', position: 'Designer', baseSalary: 4500 },
    { id: 4, name: 'Rachel Green', position: 'HR Specialist', baseSalary: 4000 },
  ]
})
