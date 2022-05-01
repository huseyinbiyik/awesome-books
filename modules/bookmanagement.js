export class BookManagement {
  static add(title, author) {
    let restoredData = JSON.parse(localStorage.getItem('books'));
    let aBook = {
      title: title,
      author: author,
      id: `${title}${author}`
    }
    restoredData.push(aBook);
    localStorage.setItem("books", JSON.stringify(restoredData));
  }

  static display() {
    let restoredData = JSON.parse(localStorage.getItem('books'));
    const display = document.querySelector('#book-list');
    restoredData.forEach(element => {
      display.innerHTML += `
      <div class="single-book">
      <p>${element.title} and ${element.author}</p>
      <button class="delete-button"  id="${element.id}" >REMOVE</button>
      </div>`
    })
  }

  static delete(e) {
    let restoredData = JSON.parse(localStorage.getItem('books'));
    restoredData = restoredData.filter((el) => {
      if (el.id == e) {
        return false;
      } else {
        return true;
      }
    })
    localStorage.setItem("books", JSON.stringify(restoredData));
    location.reload();
  }
}