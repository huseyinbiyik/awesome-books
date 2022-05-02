const listSection = document.querySelector('#list');
const addNewSection = document.querySelector('#add-new');
const contactSection = document.querySelector('#contact');

export function showListSection() {
  listSection.style.display = 'block';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
}

export function showAddNew() {
  addNewSection.style.display = 'block';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
}

export function showContact() {
  contactSection.style.display = 'block';
  addNewSection.style.display = 'none';
  listSection.style.display = 'none';
}
