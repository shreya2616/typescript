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
const hotel_1 = require("./hotel");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const rooms = [
    new hotel_1.Room(101, 'Single', 100),
    new hotel_1.Room(102, 'Double', 150),
    new hotel_1.Room(103, 'Suite', 200),
    new hotel_1.Room(104, 'Deluxe', 250),
];
const hotel = new hotel_1.Hotel(rooms);
function getUserInput() {
    console.log("\nOptions:");
    console.log("1: Check room availability");
    console.log("2: Book a room");
    console.log("3: Cancel a room");
    console.log("4: List all rooms");
    console.log("5: Exit");
    rl.question("Choose an option: ", (option) => {
        switch (option) {
            case '1':
                const availableRooms = hotel.checkAvailability();
                console.log("Available Rooms:", availableRooms);
                getUserInput();
                break;
            case '2':
                rl.question("Enter your name: ", (name) => {
                    rl.question("Enter your email: ", (email) => {
                        rl.question("Enter room number: ", (roomNumberInput) => {
                            const roomNumber = parseInt(roomNumberInput);
                            rl.question("Enter number of stay days: ", (stayDaysInput) => {
                                const stayDays = parseInt(stayDaysInput);
                                const customer = new hotel_1.Customer(name, email);
                                console.log(hotel.bookRoom(roomNumber, customer, stayDays));
                                getUserInput();
                            });
                        });
                    });
                });
                break;
            case '3':
                rl.question("Enter room number to cancel: ", (roomNumberInput) => {
                    const roomNumber = parseInt(roomNumberInput);
                    console.log(hotel.cancelRoom(roomNumber));
                    getUserInput();
                });
                break;
            case '4':
                hotel.listRooms();
                getUserInput();
                break;
            case '5':
                console.log("Exiting the application.");
                rl.close();
                break;
            default:
                console.log("Invalid option. Please try again.");
                getUserInput();
        }
    });
}
// Start the application
getUserInput();
