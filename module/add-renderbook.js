import Book from './book.js';

const renderBooks = (books) => {
  const newLine = document.querySelector('.bookLine');
  newLine.innerHTML = '';
  books.forEach((book, index) => {
    const render = ` <div class="books-view"> <p>${book.author} by ${book.title}</p> <button id='${index}' class='remove'>Remove</button></div>`;
    newLine.innerHTML += render;
  });
  const removeButtons = document.querySelectorAll('.remove');
  removeButtons.forEach((button, index) => button.addEventListener('click', () => Book.remBook(index, books)));
};

export default renderBooks;