import *  as readline from 'readline';
import { calculate } from './calculate';

const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("enter the first number: ", (firstNum) => {
    r1.question("enter the second number: " , (secondNum) => {
        r1.question("enter the opearator among '+' | '-' | '*' | '/' | '%': " , (oprator) => {
            const a = Number.parseFloat(firstNum)
            const b = Number.parseFloat(secondNum)

            try{
                const result = calculate(a,b,oprator);
                console.log(`The result is ${result}`)
            }catch(error){
                console.log(error)
            }
            r1.close()
        })
    })
})