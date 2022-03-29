export default class Book {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }

  addBook(books) {
    const myBook = new Book(this.author, this.title);
    books.push(myBook);
    localStorage.setItem('bookDetail', JSON.stringify(books));
  }

  static remBook(index, books) {
    books = books.filter((bk, i) => index !== i);
    localStorage.setItem('bookDetail', JSON.stringify(books));
    window.location.reload();
  }
}