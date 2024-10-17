import { Theatre } from "./theatre";
import *  as readline from 'readline';


const theatre = new Theatre(10)
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("\nEnter your choice \n1. Display the seats \n2. Book the seats \n3. Cancel the seats \n4. Exit")

function askQuestions(){
    r1.question("enter the choice", (choice) => {
        switch(choice){
            case '1':
                theatre.displaySeats()
                askQuestions()
                break
            case '2':
                theatre.displaySeats()
                r1.question("enter the seats to book", (input) => {
                    const bookSeats = input.split(',').map(Number)
                    console.log(theatre.bookSeat(bookSeats))
                    askQuestions()
                })
                break;
            case '3':
                theatre.displaySeats()
                r1.question("enter the seats to cancel: ",(input) => {
                    const cancelSeats = input.split(',').map(Number)
                    console.log(theatre.cancelledSeat(cancelSeats))
                    askQuestions()
                })
                break;
            case '4':
                console.log("Existing from application")
                r1.close()
            default:
                console.log("invalid choice")
        }
    })
}
askQuestions()