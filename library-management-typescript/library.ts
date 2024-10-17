export class Book{
    constructor(
        public title : string,
        public author : string,
        public numOfCopies : number
    ){}
}

export class Member{
    constructor(
        public memberName : string
    ) {}
}

export class Library{
    public book: Book[] = []
    public member: Member[] = []

    addBook(title: string, author: string, numOfCopies: number):void{
        const newBook = new Book(title,author,numOfCopies)
        this.book.push(newBook)
        console.log(`Book added: ${title} by ${author}`)
    }

    addMember(name: string):void{
        const newMember = new Member(name)
        this.member.push(newMember)
        console.log(`Member added successfully`)
    }

    bookCheckout(bookTitle: string, memberName: string):string{
        const books = this.book.find(b => b.title === bookTitle)
        const members = this.member.find(m => m.memberName === memberName)

        if(!books){
            return `Book with title ${bookTitle} not found`
        }
        if(!members){
            return `Members with ${memberName} not found`
        }
        if(books.numOfCopies>0){
            books.numOfCopies-=1
            return `${memberName} checked out book ${bookTitle}`
        }
        else{
            return `${bookTitle} not available`
        }
    }

    libraryInfo(): void{
        console.log('Library info')
        console.log(`Number of books: ${this.book.length}`)
        this.book.forEach((b) => {
            console.log(`Book: ${b.title} by ${b.author}`)
        })
        console.log(`Number of members: ${this.member.length}`)
        this.member.forEach((mem) => {
            console.log(`Member: ${mem.memberName}`)
        })
    }
}