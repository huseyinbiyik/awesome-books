import {
  BookManagement
} from "./BookManagement.js";

const title = document.querySelector('#title');
const author = document.querySelector('#author');

export const addNew = (e) => {
  e.preventDefault();
  BookManagement.add(title.value, author.value);
  location.reload();
};