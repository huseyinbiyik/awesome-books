import {
  Bookmanagement
} from "./bookmanagement.js"

export function removeBooks(button) {
  button.addEventListener('click', (e) => {
    Bookmanagement.delete(e.target.id);
  })
}