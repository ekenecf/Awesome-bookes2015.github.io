import renderBooks from './module/add-renderbook.js';
import Book from './module/book.js';
import { DateTime } from './module/luxon.js';

let books = [];
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const addBtn = document.querySelector('#add');
const form = document.querySelector('#form');
books = JSON.parse(localStorage.getItem('bookDetail')) || [];

renderBooks(books);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const myBook = new Book(bookTitle.value, bookAuthor.value);
  myBook.addBook(books);
  bookTitle.value = '';
  bookAuthor.value = '';
  renderBooks(books);
});

const list = document.querySelector('#list');
const addNew = document.querySelector('#add-new');
const displayBooks = document.querySelector('.display-books');
const bookContainer = document.querySelector('#book-list-container');
const contactInfo = document.querySelector('#contact-info');
const bookContact = document.querySelector('.bkcontact');

const showBooks = () => {
  displayBooks.classList.add('show');
  bookContainer.classList.add('view');
  bookContact.classList.remove('van');
};
list.addEventListener('click', showBooks);

const viewBook = () => {
  bookContainer.classList.remove('view');
  displayBooks.classList.remove('show');
  bookContact.classList.remove('van');
};
addNew.addEventListener('click', viewBook);

const ctInfo = () => {
  bookContact.classList.add('van');
  displayBooks.classList.remove('show');
  bookContainer.classList.add('view');
};
contactInfo.addEventListener('click', ctInfo);

const Date = () => {
  const dateContainer = document.querySelector('.date');
  const currentTime = DateTime.local();

  dateContainer.innerHTML = `${currentTime.monthLong} ${currentTime.day} ${currentTime.year}, ${currentTime.hour}:${currentTime.minute}`;
};
Date();
