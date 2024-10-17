export class Room {
    constructor(
        public roomNumber: number,
        public type: string,
        public pricePerNight: number,
        public isAvailable: boolean = true
    ) {}
}

export class Customer {
    constructor(
        public name: string,
        public email: string
    ) {}
}

export class Hotel {
    private rooms: Room[] = [];

    constructor(rooms: Room[]) {
        this.rooms = rooms;
    }

    checkAvailability(): Room[] {
        return this.rooms.filter(room => room.isAvailable);
    }

    bookRoom(roomNumber: number, customer: Customer, stayDays: number): string {
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

    cancelRoom(roomNumber: number): string {
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

    listRooms(): void {
        console.log("Available Rooms:");
        this.rooms.forEach(room => {
            console.log(`Room Number: ${room.roomNumber}, Type: ${room.type}, Price per Night: ${room.pricePerNight}, Available: ${room.isAvailable}`);
        });
    }
}