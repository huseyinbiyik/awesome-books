import {
  Bookmanagement
} from "./modules/bookmanagement.js";
import {
  addNew
} from "./modules/addNew.js";
import {
  removeBooks
} from "./modules/removeBooks.js";
import {
  showListSection
} from "./modules/navigation.js";
import {
  showAddNew
} from "./modules/navigation.js";
import {
  showContact
} from "./modules/navigation.js";

const addForm = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const navListBtn = document.querySelector('#nav-list');
const navAddNewBtn = document.querySelector('#nav-add-new');
const navContactBtn = document.querySelector('#nav-contact');


if (!JSON.parse(localStorage.getItem('books'))) {
  localStorage.setItem("books", JSON.stringify([]));
}

Bookmanagement.display();

addForm.addEventListener('submit', addNew);

const deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach(removeBooks);



// Time
const lastMod = document.querySelector('#last-modified');
lastMod.innerHTML = document.lastModified;

// Navigation
navListBtn.addEventListener('click', showListSection);
navAddNewBtn.addEventListener('click', showAddNew);
navContactBtn.addEventListener('click', showContact);