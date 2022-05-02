import
BookManagement
from './modules/bookmanagement.js';
import
addNew
from './modules/addNew.js';
import
removeBooks
from './modules/removeBooks.js';
import {
  showListSection,
  showAddNew,
  showContact,
} from './modules/navigation.js';
import {
  DateTime,
} from './modules/luxon.js';

const addForm = document.querySelector('form');
const navListBtn = document.querySelector('#nav-list');
const navAddNewBtn = document.querySelector('#nav-add-new');
const navContactBtn = document.querySelector('#nav-contact');

if (!JSON.parse(localStorage.getItem('books'))) {
  localStorage.setItem('books', JSON.stringify([]));
}

// Show the books on localStorage
BookManagement.display();

// Add a book
addForm.addEventListener('submit', addNew);

// Dynamic remove buttons
const deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach(removeBooks);

// Time
const time = document.querySelector('#time');
const dt = DateTime.now();
time.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);

// Navigation
navListBtn.addEventListener('click', showListSection);
navAddNewBtn.addEventListener('click', showAddNew);
navContactBtn.addEventListener('click', showContact);