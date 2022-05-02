import
BookManagement
from './bookmanagement.js';

const title = document.querySelector('#title');
const author = document.querySelector('#author');

export default function addNew(e) {
  e.preventDefault();
  BookManagement.add(title.value, author.value);
  window.location.reload(true);
}