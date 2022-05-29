export default class BookManagement {
  static add(title, author) {
    const restoredData = JSON.parse(localStorage.getItem('books'));
    const aBook = {
      title,
      author,
      id: `${title}${author}`,
    };
    restoredData.push(aBook);
    localStorage.setItem('books', JSON.stringify(restoredData));
  }

  static display() {
    const restoredData = JSON.parse(localStorage.getItem('books'));
    const display = document.querySelector('#book-list');
    restoredData.forEach((element) => {
      display.innerHTML += `
      <div class="single-book">
      <p>${element.title} by ${element.author}</p>
      <button class="delete-button"  id="${element.id}" >REMOVE</button>
      </div>`;
    });
  }

  static delete(e) {
    let restoredData = JSON.parse(localStorage.getItem('books'));
    restoredData = restoredData.filter((el) => {
      if (el.id === e) {
        return false;
      }
      return true;
    });
    localStorage.setItem('books', JSON.stringify(restoredData));
    window.location.reload();
  }
}
