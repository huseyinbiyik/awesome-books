
import { Bookmanagement } from "./modules/bookmanagement.js";
import {addNew} from "./modules/addNew.js";

const addForm = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

if (!JSON.parse(localStorage.getItem('books'))) {
  localStorage.setItem("books", JSON.stringify([]));
}

Bookmanagement.display();

addForm.addEventListener('submit', addNew);

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