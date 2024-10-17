

import * as readline from 'readline';
import { Room, Customer, Hotel } from './hotel';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const rooms = [
    new Room(101, 'Single', 100),
    new Room(102, 'Double', 150),
    new Room(103, 'Suite', 200),
    new Room(104, 'Deluxe', 250),
];

const hotel = new Hotel(rooms);


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
                                const customer = new Customer(name, email);
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