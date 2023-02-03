
let showMessage = document.getElementById("message");
let tablebody = document.getElementById("tableBody");
let libraryForm = document.getElementById("libraryForm");

class Book {
    constructor(bookName, Author, type) {
        this.name = bookName;
        this.author = Author;
        this.type = type;
    }
}

class Display {
    add(book) {
        let listObj;
        let list = localStorage.getItem("list");
        if (list == null) {
            listObj = [];
        }
        else {
            listObj = JSON.parse(list);
        }
        listObj.push(book);
        localStorage.setItem("list", JSON.stringify(listObj));
        book.name = "";
        book.author = "";

    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }
    showTable() {
        let listObj;
        let list = localStorage.getItem("list");
        if (list == null) {
            listObj = [];
        }
        else {
            listObj = JSON.parse(list);
        }
        let html = "";
        listObj.forEach((book, index) => {
            html += `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                            <td><button id="${index}" onclick="deleteBook(this.id)" class="btn btn-primary">Remove</button></td>
                        </tr>`;
            console.log(index);
        });
        if (listObj.length != 0) {
            tablebody.innerHTML = html;
        }
        else {
            tablebody.innerHTML = `there is nothing to show`;
        }
    }
    show(type, displayMessage) {
        let message = document.getElementById("message");
        let boldText;
        if (type === "success") {
            boldText = "success";
        }
        else {
            boldText = "Error!";
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = '';
        }, 5000);
    }
}

libraryForm.addEventListener("submit", libraryFormSubmit);
function libraryFormSubmit(e) {
    let bookName = document.getElementById("bookName").value;
    let Author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");


    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(bookName, Author, type);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.showTable();
        display.clear();
        display.show('success', 'Your book has been successfully added');
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }
    e.preventDefault();
}

function deleteBook(index) {
    let listObj;
    let list = localStorage.getItem("list");
    if (list == null) {
        listObj = [];
    }
    else {
        listObj = JSON.parse(list);
    }
    console.log(index);
    listObj.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(listObj));
    let display = new Display();
    display.showTable();
    preventDefault();
}


