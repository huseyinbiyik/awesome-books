let library = [];
class Book {
  constructor() {

  }
  addBook(title, author) {
    library.push({
      title: title,
      author: author
    });
    localStorage.setItem('Library', JSON.stringify(library));
  }



  displayBooks() {
   let getBooks =   JSON.parse(localStorage.getItem('Library'));
    const bookList = document.querySelector('#book-list');
    if (true) {
      getBooks.forEach((book) => {
        const newBook = ` 
       <p>"${book.title}" by ${book.author}</p>
       <button type="button" >Remove</button>
       `;
        const singleBook = document.createElement('div');
        singleBook.classList.add('single-book');
        singleBook.innerHTML = newBook;
        bookList.appendChild(singleBook);
      });
    }
  }





}

let b = new Book();



const addButton = document.querySelector('#add_Button');
addButton.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  b.addBook(title, author);
  b.displayBooks();
});


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