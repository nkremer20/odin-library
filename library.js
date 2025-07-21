const library = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = function() {
    return window.crypto.randomUUID();
  };
}

function addBookToLibrary() {

};

window.onload = function () {
    document.querySelector('form').onsubmit = (e) => {
        console.log('test');
        e.preventDefault();
    }
};