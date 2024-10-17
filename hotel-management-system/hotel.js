"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = exports.Customer = exports.Room = void 0;
class Room {
    constructor(roomNumber, type, pricePerNight, isAvailable = true) {
        this.roomNumber = roomNumber;
        this.type = type;
        this.pricePerNight = pricePerNight;
        this.isAvailable = isAvailable;
    }
}
exports.Room = Room;
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
exports.Customer = Customer;
class Hotel {
    constructor(rooms) {
        this.rooms = [];
        this.rooms = rooms;
    }
    checkAvailability() {
        return this.rooms.filter(room => room.isAvailable);
    }
    bookRoom(roomNumber, customer, stayDays) {
        const room = this.rooms.find(r => r.roomNumber === roomNumber);
        if (!room) {
            return "Room not found.";
        }
        if (!room.isAvailable) {
            return "Sorry, this room is not available.";
        }
        room.isAvailable = false; // Mark room as booked
        const totalCost = room.pricePerNight * stayDays;
        return `Room ${roomNumber} booked successfully for ${stayDays} days. Total cost: ${totalCost}.`;
    }
    cancelRoom(roomNumber) {
        const room = this.rooms.find(r => r.roomNumber === roomNumber);
        if (!room) {
            return "Room not found.";
        }
        if (room.isAvailable) {
            return "Room is not booked.";
        }
        room.isAvailable = true; // Mark room as available
        return `Room ${roomNumber} has been canceled successfully.`;
    }
    listRooms() {
        console.log("Available Rooms:");
        this.rooms.forEach(room => {
            console.log(`Room Number: ${room.roomNumber}, Type: ${room.type}, Price per Night: ${room.pricePerNight}, Available: ${room.isAvailable}`);
        });
    }
}
exports.Hotel = Hotel;
