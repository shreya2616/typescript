"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const employee = [];
function findEmployeesByDepartment(department) {
    return employee.filter(employee => employee.department.toLowerCase() === department.toLowerCase());
}
function salaryByDepartment(department) {
    const data = findEmployeesByDepartment(department);
    return data.reduce((total, employee) => total + employee.salary, 0);
}
function addEmployee() {
    r1.question("enter the id: ", (idInput) => {
        const id = Number.parseFloat(idInput);
        r1.question("enter the name: ", (employeeName) => {
            r1.question("enter the department: ", (department) => {
                r1.question("enter the salary", (salaryInput) => {
                    const salary = Number.parseFloat(salaryInput);
                    employee.push({ id, employeeName, department, salary });
                    r1.question("do you want to add more employee (yes/no)", (answer) => {
                        if (answer === "yes") {
                            addEmployee();
                        }
                        else {
                            r1.question("which department employee you want to fetch", (departmentName) => {
                                const employees = findEmployeesByDepartment(departmentName);
                                const totalSalary = salaryByDepartment(departmentName);
                                console.log(`Employees for department ${departmentName}: `, employees);
                                console.log(`total salary for ${departmentName} department: `, totalSalary);
                            });
                        }
                    });
                });
            });
        });
    });
}
addEmployee();
