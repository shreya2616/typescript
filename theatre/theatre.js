"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theatre = void 0;
class Theatre {
    constructor(totalSeats) {
        this.totalSeats = totalSeats;
        this.seats = new Array(totalSeats).fill(false);
    }
    displaySeats() {
        console.log("Seats availability: ");
        this.seats.forEach((seat, index) => {
            const status = seat ? 'N' : 'A';
            console.log(`Seat ${index + 1}: `, status);
        });
        console.log();
    }
    bookSeat(seatNumbers) {
        for (let seat of seatNumbers) {
            if (seat < 1 || seat > this.totalSeats) {
                console.log(`Seat ${seat} is invalid seat number`);
            }
            else if (this.seats[seat - 1]) {
                console.log(`Seat ${seat - 1} is not available`);
            }
            this.seats[seat - 1] = true;
        }
        return 'Seats added successfully!';
    }
    cancelledSeat(seatNumber) {
        for (let seat of seatNumber) {
            if (seat < 1 || seat > this.totalSeats) {
                console.log(`Seat ${seat} is invalid`);
            }
            else if (!this.seats[seat - 1]) {
                console.log(`seat ${seat} is not booked yet`);
            }
            this.seats[seat - 1] = false;
        }
        return 'Seats cancelled successfully';
    }
}
exports.Theatre = Theatre;
