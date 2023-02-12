// TODO
// Make the form appera when you press "new book"
// Make the pages of the form only take numbers
// Allow for actual form submission
// Allow for the checkmark to be pressed later to categorize as read
// Make a tracker to count pages read
// Add a remove book to remove it from the library
// Add edit functionality

let myLibrary = [];

const submitBtn = document.querySelector(".submit");
const newBookBtn = document.querySelector(".new-book");

// Check for form submission
submitBtn.addEventListener("click", function () {
  addBookToLibrary();
});

// Add event listener for the button and add a form when pressed
newBookBtn.addEventListener("click", function () {
  createForm();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // Get the attributes from the submission form
  let title = document.querySelector("#title");
  let author = document.querySelector("#author");
  let pages = document.querySelector("#pages");
  let read = document.querySelector("#read");

  let newBook = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(newBook);
  clearBooksOnPage();
  addBooksToPage(myLibrary);
}

// Adds books to the html of the page
function addBooksToPage(myLibrary) {
  const libraryContainer = document.querySelector(".library-container");
  for (let i = 0; i < myLibrary.length; i++) {
    // Create a container for the attributes of the book
    let div = document.createElement("div");
    div.className = "book-container";
    //  Get the title, author, and pages of a book
    let bookTitle = document.createElement("div");
    let bookAuthor = document.createElement("div");
    let bookPages = document.createElement("div");
    let pair = document.createElement("div");
    let label = document.createElement("label");
    let bookRead = document.createElement("input");

    pair.className = "pair";
    label.textContent = "Read?";
    bookRead.type = "checkbox";
    if (myLibrary[i].read) {
      bookRead.checked = true;
    }
    pair.appendChild(label);
    pair.appendChild(bookRead);

    bookTitle.textContent = `Title: ${myLibrary[i].title}`;
    bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
    bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
    // Add the book container to the bigger library container
    libraryContainer.appendChild(div);
    // Add the title, author, and pages to the book container
    div.appendChild(bookTitle);
    div.appendChild(bookAuthor);
    div.appendChild(bookPages);
    div.appendChild(pair);
  }
}

// Creates a form
function createForm() {
  const formContainer = document.querySelector(".form-container");
  formContainer.style.display = "flex";
}

// Removes all the books before adding them again
function clearBooksOnPage() {
  let bookContainer = document.querySelectorAll(".book-container");
  bookContainer.forEach((container) => container.remove());
}

addBooksToPage(myLibrary);
