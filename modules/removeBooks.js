import
BookManagement
from './bookmanagement.js';

export default function removeBooks(button) {
  button.addEventListener('click', (e) => {
    BookManagement.delete(e.target.id);
  });
}