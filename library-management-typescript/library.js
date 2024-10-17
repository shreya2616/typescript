"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = exports.Member = exports.Book = void 0;
class Book {
    constructor(title, author, numOfCopies) {
        this.title = title;
        this.author = author;
        this.numOfCopies = numOfCopies;
    }
}
exports.Book = Book;
class Member {
    constructor(memberName) {
        this.memberName = memberName;
    }
}
exports.Member = Member;
class Library {
    constructor() {
        this.book = [];
        this.member = [];
    }
    addBook(title, author, numOfCopies) {
        const newBook = new Book(title, author, numOfCopies);
        this.book.push(newBook);
        console.log(`Book added: ${title} by ${author}`);
    }
    addMember(name) {
        const newMember = new Member(name);
        this.member.push(newMember);
        console.log(`Member added successfully`);
    }
    bookCheckout(bookTitle, memberName) {
        const books = this.book.find(b => b.title === bookTitle);
        const members = this.member.find(m => m.memberName === memberName);
        if (!books) {
            return `Book with title ${bookTitle} not found`;
        }
        if (!members) {
            return `Members with ${memberName} not found`;
        }
        if (books.numOfCopies > 0) {
            books.numOfCopies -= 1;
            return `${memberName} checked out book ${bookTitle}`;
        }
        else {
            return `${bookTitle} not available`;
        }
    }
    libraryInfo() {
        console.log('Library info');
        console.log(`Number of books: ${this.book.length}`);
        this.book.forEach((b) => {
            console.log(`Book: ${b.title} by ${b.author}`);
        });
        console.log(`Number of members: ${this.member.length}`);
        this.member.forEach((mem) => {
            console.log(`Member: ${mem.memberName}`);
        });
    }
}
exports.Library = Library;
