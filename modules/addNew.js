import {
  Bookmanagement
} from "./bookmanagement.js";

export function addNew(e) {
  e.preventDefault();
  Bookmanagement.add(title.value, author.value);
  location.reload();
};