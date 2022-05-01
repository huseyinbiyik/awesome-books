import {
  BookManagement
} from "./BookManagement.js"

export function removeBooks(button) {
  button.addEventListener('click', (e) => {
    BookManagement.delete(e.target.id);
  })
}