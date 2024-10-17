import *  as readline from 'readline';

interface Employee{
    id : number,
    employeeName : string,
    department : string,
    salary: number
}

const r1 = readline.createInterface({
    input: process.stdin,
    output : process.stdout
})

const employee: Employee[] = []

function findEmployeesByDepartment(department: string): Employee[]{
    return employee.filter(employee => employee.department.toLowerCase() === department.toLowerCase())
}

function salaryByDepartment(department: string): number{
    const data = findEmployeesByDepartment(department)
    return data.reduce((total,employee) => total+employee.salary,0)
}

function addEmployee(){
    r1.question("enter the id: ",(idInput) => {
        const id = Number.parseFloat(idInput)
        r1.question("enter the name: ",(employeeName) => {
            r1.question("enter the department: ",(department) => {
                r1.question("enter the salary", (salaryInput) => {
                    const salary = Number.parseFloat(salaryInput)
                    employee.push({id,employeeName,department,salary})

                    r1.question("do you want to add more employee (yes/no)" , (answer) => {
                        if(answer==="yes"){
                            addEmployee()
                        }
                        else{
                            r1.question("which department employee you want to fetch", (departmentName) => {
                                const employees = findEmployeesByDepartment(departmentName)
                                const totalSalary = salaryByDepartment(departmentName)

                                console.log(`Employees for department ${departmentName}: `, employees)
                                console.log(`total salary for ${departmentName} department: `,totalSalary)
                            })
                        }
                    })
                })
            })
        })
    })
}
addEmployee()