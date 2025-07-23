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

function addBookToLibrary(form) {

};

window.onload = () => {
    const cards = document.querySelectorAll('.book-card')
    const delete_buttons = document.querySelectorAll('.delete')
    const form = document.querySelector('form')

    console.log(delete_buttons)

    delete_buttons.forEach(
        button => {
            button.addEventListener('click', () => {
                console.log(button.parentElement.id);
            })
        }
    );

    // console.log(cards);

    form.onsubmit = (e) => {
        addBookToLibrary();
        e.preventDefault();
    }


};