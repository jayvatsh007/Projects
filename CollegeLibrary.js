console.log("Welcome to our Library!");
// Book constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}



// Adding method add in Display's Prototype
Display.prototype.add = function(book) {
    console.log("Add to UI")
    tableBody = document.getElementById('tableBody');
    let uiString = `
    <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>`
    tableBody.innerHTML += uiString;
}

// Adding method clear in Display's Prototype
Display.prototype.clear = function() {
    let formLibrary = document.getElementById('libraryForm');
    formLibrary.reset();
}

// Adding method validate in Display's Prototype
Display.prototype.validate = function(book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    } else {
        return true;
    }
}

// Adding method show in Display's Prototype
Display.prototype.show = function(type, dispMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message:</strong> ${dispMessage}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
    }
    // Event Listener to button
let formLibrary = document.getElementById('libraryForm');
formLibrary.addEventListener('submit', addBookToLibrary);

function addBookToLibrary(e) {
    e.preventDefault();
    console.log("Hello");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }
    // console.log(name + " " + author + " " + type);
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' Your book has been successfully added');
    } else {
        display.show('danger', ' Sorry you cannot add this book');
    }

}