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
    library_div.appendChild(new_card);
    
    // Create div that holds the card info
    const new_card_info = document.createElement('div');
    new_card_info.classList.add('book-info');
    new_card.appendChild(new_card_info);

    for (const key of Object.keys(book)) {
        if (key != 'id') {
            // Add the h4 element
            const card_text = document.createElement('h4');
            card_text.classList.add('card-text');
            new_card_info.appendChild(card_text);
            card_text.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ` 

            if (key == 'read') {
                const read_selector = document.createElement('select');
                card_text.appendChild(read_selector);
                if (book[key] == 'yes') {
                    const yes_option = document.createElement('option');
                    const yes_option_text = document.createTextNode('Yes');
                    yes_option.appendChild(yes_option_text);
                    yes_option.setAttribute('value', 'yes');
                    read_selector.appendChild(yes_option);

                    const no_option = document.createElement('option');
                    const no_option_text = document.createTextNode('No');
                    no_option.appendChild(no_option_text);
                    no_option.setAttribute('value', 'no');
                    read_selector.appendChild(no_option);
                }
                else {
                    const no_option = document.createElement('option');
                    const no_option_text = document.createTextNode('No');
                    no_option.appendChild(no_option_text);
                    no_option.setAttribute('value', 'no');
                    read_selector.appendChild(no_option);

                    const yes_option = document.createElement('option');
                    const yes_option_text = document.createTextNode('Yes');
                    yes_option.appendChild(yes_option_text);
                    yes_option.setAttribute('value', 'yes');
                    read_selector.appendChild(yes_option);
                }
            }
            else {
                // Add span to the card text with the book info
                const book_info = document.createElement('span');
                book_info.textContent = book[key];
                card_text.appendChild(book_info);
            }
        }
        else {
            new_card.id = book.id;
        }
    }

    // Add delete button to the card
    const delete_button = document.createElement('button');
    delete_button.textContent = 'Delete'
    delete_button.classList.add('delete');
    new_card.appendChild(delete_button);
        
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