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
const library_1 = require("./library");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const library = new library_1.Library();
function askOptions() {
    console.log('Enter you choice \n1. Add the book \n2. Add the member \n3. Library information \n4. Select book for checkout \n5. Exit');
    r1.question("Choose the option: ", (option) => {
        switch (option) {
            case '1':
                r1.question("enter the title of the book: ", (bookTitle) => {
                    r1.question("enter the author: ", (author) => {
                        r1.question("enter the number of copies: ", (numOfCopies) => {
                            const num = Number.parseFloat(numOfCopies);
                            library.addBook(bookTitle, author, num);
                            askOptions();
                        });
                    });
                });
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
    });
}
askOptions();
