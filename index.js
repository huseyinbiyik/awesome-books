const cForm = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

if (!JSON.parse(localStorage.getItem('books'))) {
  localStorage.setItem("books", JSON.stringify([]));
}

class Bookmanagement {

  static add(title, author) {
    let restoredData = JSON.parse(localStorage.getItem('books'));
    let aBook = {
      title: title,
      author: author,
      id: `${title}${author}`
    }
    restoredData.push(aBook);
    localStorage.setItem("books", JSON.stringify(restoredData));
  }

  static display() {
    let restoredData = JSON.parse(localStorage.getItem('books'));
    const display = document.querySelector('#book-list');
    restoredData.forEach(element => {
      display.innerHTML += `
      <div class="single-book">
      <p>${element.title} and ${element.author}</p>
      <button class="delete-button"  id="${element.id}" >REMOVE</button>
      </div>`

    })
  }

  static delete(e) {
    let restoredData = JSON.parse(localStorage.getItem('books'));
    restoredData = restoredData.filter((el) => {
      if (el.id == e) {
        return false;
      } else {
        return true;
      }
    })
    localStorage.setItem("books", JSON.stringify(restoredData));
    location.reload();
  }
}

Bookmanagement.display();

cForm.addEventListener('submit', (e) => {
  e.preventDefault();
  Bookmanagement.add(title.value, author.value);
  location.reload();
})

let delBtn = document.querySelectorAll('.delete-button');
delBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
    Bookmanagement.delete(e.target.id);
  })
})


// Time
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