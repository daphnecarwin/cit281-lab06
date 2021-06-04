class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = titleOfBook;
      this.author = authorOfBook;
      this.pubDate = pubDateOfBook;
      this.isbn= isbn;
    }
}

class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = ""} = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate };
        this._books.push(newBook);
      }
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`);
    }
    }
    deleteBook(isbn){
        let indexOfBookToRemmove= null;
        for(let index = 0; iindex < this._books.length; index++){
            let currentBook = this._books[index];
            if (currentBook.isbn == isbn){
                indexofBookToRemove = index;
                break;
            }
        }

    }
  }

const myBook = new Book("AP Calc Crash Course", "Banu et al","01/01/2013", "1234561");
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018","4312314");

const uoLibrary= new Library("Knight Library");
uoLibrary.addBook(myBook);
uoLibrary.addBook(atomicHabits);
uoLibrary.listBooks();

console.log(myBook);
