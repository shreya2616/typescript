interface Employee{
    employeeId:Number;
    name:string;
    email:string;
    isActive:boolean;
    dateOfJoining:Date;
    skills:string[];
    salary:number;
    department:string | null;
}
 
const employee : Employee={
    employeeId:1,
    name:"Shreya",
    email:"shreya123@gmail.com",
    isActive:true,
    dateOfJoining:new Date("2024-09-23"),
    skills:["a","b","c"],
    salary:30000,
    department:"cse"
}
 
console.log(employee);