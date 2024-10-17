import *  as readline from 'readline';
import { Library } from './library';

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const library = new Library();

function askOptions(){
    console.log('Enter you choice \n1. Add the book \n2. Add the member \n3. Library information \n4. Select book for checkout \n5. Exit')

    r1.question("Choose the option: ",(option) =>{
        switch(option){
            case '1':
                r1.question("enter the title of the book: ",(bookTitle) => {
                    r1.question("enter the author: ",(author) => {
                        r1.question("enter the number of copies: ",(numOfCopies) => {
                            const num = Number.parseFloat(numOfCopies)
                            library.addBook(bookTitle,author,num)
                            askOptions()
                        })
                    })
                })
                break;
            case '2':
                r1.question("Enter member name: ", (name) => {
                    library.addMember(name);
                    askOptions();
                });
                break;
            case '3':
                r1.question("Enter the book title: ", (bookTitle) => {
                    r1.question("Enter the member name: ", (memberName) => {
                        console.log(library.bookCheckout(bookTitle, memberName));
                        askOptions();
                    });
                });
                break;
            case '4':
                library.libraryInfo();
                askOptions();
                break;
            case '5':
                console.log("Exiting the application.");
                r1.close();
                break;
            default:
                console.log("Invalid option. Please try again.");
                askOptions();
        }
    })
}
askOptions()