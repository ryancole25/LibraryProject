let myLibrary = ["Hello", "Hi", "treat", "me"];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

function addBookToLibrary() {
  return;
}

// Adds books to the html of the page
function addBooksToPage(myLibrary) {
  const libraryContainer = document.querySelector(".library-container");
  for (let i = 0; i < myLibrary.length; i++) {
    let div = document.createElement("div");
    div.className = "book-container";
    div.textContent = `Title: ${myLibrary[i]}`;
    libraryContainer.appendChild(div);
  }
}

addBooksToPage(myLibrary);

// Add event listener for the button and add a form when pressed
const newBookBtn = document.querySelector(".new-book");
newBookBtn.addEventListener("click", function () {
  createForm();
});

function createForm() {
  return;
}
