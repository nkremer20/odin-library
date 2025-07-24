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

function addBookToLibrary() {
    // Get the last item in the array
    const book = library[library.length - 1];

    // Create new card in the library div
    const library_div = document.querySelector('.library');
    const new_card = document.createElement('div');
    new_card.classList.add('book-card');
    

    // Add object info to new card
    const new_card_info = document.createElement('div');

    for (const key of Object.keys(book)) {
        const card_info = document.createElement('h4')
        card_info.classList.add('card-text');
        if (key != 'id') {
            card_info.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            
            if (key == 'read') {

            }
            else {

            }
        }
        else {
            new_card.id = book[key];
        }
        new_card_info.appendChild(card_info);
    }

    new_card.appendChild(new_card_info);
    library_div.appendChild(new_card);
        
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

        // Add book to library array
        library.push(new_book);

        addBookToLibrary();

        form.reset();
    })


};