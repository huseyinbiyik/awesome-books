/* eslint-disable  no-restricted-globals */
/* eslint-disable  no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
class SingleBook {
  constructor(id, name, author) {
    this.id = id;
    this.name = name;
    this.author = author;
  }
}

class ManageBooks {
  constructor() {
    this.book_list = localStorage.getItem('save') ? JSON.parse(localStorage.getItem('save')) : [];
  }

  display() {
    const BookList = document.querySelector('#book-list');
    if (this.book_list) {
      this.book_list.forEach((book) => {
        const NewBook = ` 
       <p>"${book.name}" by ${book.author}</p>
       <button type="button" onclick=RemoveBook(${book.id}) >Remove</button>
       `;
        const Singlebook = document.createElement('div');
        Singlebook.classList.add('single-book');
        Singlebook.innerHTML = NewBook;
        BookList.appendChild(Singlebook);
      });
    }
  }

  add(name, author) {
    let id = 0;
    if (this.book_list.length > 0) {
      id = this.book_list[this.book_list.length - 1].id + 1;
    }
    const NewBook = new SingleBook(id, name, author);
    this.book_list.push(NewBook);
    this.LocalSave(this.book_list);
  }

  LocalSave(arr) {
    localStorage.setItem('save', JSON.stringify(arr));
    location.reload();
  }

  delete(id) {
    this.book_list = this.book_list.filter((book) => {
      if (id === book.id) {
        return false;
      }
      return true;
    });
    this.LocalSave(this.book_list);
  }
}

const books = new ManageBooks();
books.display();

const AddBtn = document.querySelector('#add_Button');
AddBtn.addEventListener('click', () => {
  const name = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  books.add(name, author);
});

function RemoveBook(id) {
  books.delete(id);
}

// Last modified
const lastMod = document.querySelector('#last-modified');
lastMod.innerHTML = document.lastModified;

// Navigation
const navListBtn = document.querySelector('#nav-list');
const navAddNewBtn = document.querySelector('#nav-add-new');
const navContactBtn = document.querySelector('#nav-contact');

const listSection = document.querySelector('#list');
const addNewSection = document.querySelector('#add-new');
const contactSection = document.querySelector('#contact');

navListBtn.addEventListener('click', () => {
  listSection.style.display = 'block';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
});

navAddNewBtn.addEventListener('click', () => {
  addNewSection.style.display = 'block';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
});

navContactBtn.addEventListener('click', () => {
  contactSection.style.display = 'block';
  addNewSection.style.display = 'none';
  listSection.style.display = 'none';
});