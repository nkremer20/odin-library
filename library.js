const library = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
  };

function addBookToLibrary(new_book) {
    
};

window.onload = () => {
    const delete_buttons = document.querySelectorAll('.delete')
    const form = document.querySelector('#form')
    const add_book_btn = document.querySelector('.add-book-btn')

    console.log(delete_buttons)

    delete_buttons.forEach(
        button => {
            button.addEventListener('click', () => {
                console.log(button.parentElement.id);
            })
        }
    );

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get the form element values
        const title = form.elements['title'].value;
        const author = form.elements['author'].value;
        const pages = form.elements['pages'].value;
        const read = form.elements['read'].value;

        // Create new book object
        const new_book = new Book(title, author, pages, read);

        console.log(new_book);

        form.reset();
    })


};