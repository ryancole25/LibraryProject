// TODO
// Allow for the checkmark to be pressed later to categorize as read
// Make a tracker to count pages read
// Add edit functionality

let myLibrary = [];

const submitBtn = document.querySelector(".submit");
const newBookBtn = document.querySelector(".new-book");

// Check for form submission
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
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

  if (title.value != "" && author.value != "" && pages.value != "") {
    myLibrary.push(newBook);
    clearBooksOnPage();
    addBooksToPage(myLibrary);
    // clear the inputs upon submission
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
  }
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
    let close = document.createElement("img");

    close.src = "close.svg";
    close.className = "close";
    close.id = `${i}`;
    pair.className = "pair";
    label.innerHTML = "<b>Read?</b>";
    bookRead.type = "checkbox";
    if (myLibrary[i].read) {
      bookRead.checked = true;
    }
    pair.appendChild(label);
    pair.appendChild(bookRead);

    bookTitle.innerHTML = `<b>Title:</b> ${myLibrary[i].title}`;
    bookAuthor.innerHTML = `<b>Author:</b> ${myLibrary[i].author}`;
    bookPages.innerHTML = `<b>Pages:</b> ${myLibrary[i].pages}`;
    // Add the book container to the bigger library container
    libraryContainer.appendChild(div);
    // Add the title, author, and pages to the book container
    div.appendChild(close);
    div.appendChild(bookTitle);
    div.appendChild(bookAuthor);
    div.appendChild(bookPages);
    div.appendChild(pair);
  }

  // Add a new close button listener
  let closeBtn = document.querySelectorAll(".close");

  closeBtn.forEach((button) =>
    button.addEventListener("click", function () {
      deleteBook(button.id);
    })
  );
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  clearBooksOnPage();
  addBooksToPage(myLibrary);
}

// Creates a form
function createForm() {
  const formContainer = document.querySelector(".form-container");
  if (formContainer.style.display == "flex") {
    formContainer.style.display = "none";
  } else {
    formContainer.style.display = "flex";
  }
}

// Removes all the books before adding them again
function clearBooksOnPage() {
  let bookContainer = document.querySelectorAll(".book-container");
  bookContainer.forEach((container) => container.remove());
}
