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
const theatre_1 = require("./theatre");
const readline = __importStar(require("readline"));
const theatre = new theatre_1.Theatre(10);
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("\nEnter your choice \n1. Display the seats \n2. Book the seats \n3. Cancel the seats \n4. Exit");
function askQuestions() {
    r1.question("enter the choice", (choice) => {
        switch (choice) {
            case '1':
                theatre.displaySeats();
                askQuestions();
                break;
            case '2':
                theatre.displaySeats();
                r1.question("enter the seats to book", (input) => {
                    const bookSeats = input.split(',').map(Number);
                    console.log(theatre.bookSeat(bookSeats));
                    askQuestions();
                });
                break;
            case '3':
                theatre.displaySeats();
                r1.question("enter the seats to cancel: ", (input) => {
                    const cancelSeats = input.split(',').map(Number);
                    console.log(theatre.cancelledSeat(cancelSeats));
                    askQuestions();
                });
                break;
            case '4':
                console.log("Existing from application");
                r1.close();
            default:
                console.log("invalid choice");
        }
    });
}
askQuestions();
