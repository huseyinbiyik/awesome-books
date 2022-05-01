import
BookManagement
from './BookManagement.js';

export default function removeBooks(button) {
  button.addEventListener('click', (e) => {
    BookManagement.delete(e.target.id);
  });
}