let addTxt = document.getElementById("addTxt");
let addBtn = document.getElementById("addBtn");

function LocalStorage() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

}

addBtn.addEventListener("click", function (e) {
    LocalStorage();
    notesObj.push(addTxt.value);
    addTxt.value = "";
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
})
function showNotes() {
    LocalStorage();
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="cardBody">
                    <div class="noteCard">
                        <h2>Note ${index + 1}</h2>
                        <p>${element}</p>
                        <button id="${index}" class="btn" onclick="deleteNote(this.id)">Delete Note</button>
                    </div>
                </div>`;

    });
    let notesElem = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
}
function deleteNote(index) {
    LocalStorage();
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    let text = search.value.toLowerCase();
    let notesCard = document.getElementsByClassName("cardBody");

    Array.from(notesCard).forEach(function (element) {
        let noteText = element.getElementsByTagName("p")[0].innerText;
        if (noteText.includes(text)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})


