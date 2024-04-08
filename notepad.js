console.log("Welcome to Notes!");
showNotes();
// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(event) {
        let addTxt = document.getElementById("addTxt");
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
        console.log(notesObj);
        showNotes();
    })
    // function to show notes to user
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function(element, index) {
        html += `
        <div class="my-2 mx-2 cards" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Note${index+1}</h5>
                  <p class="card-text">${element}</p>
                  <a href="#" id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Node</a>
                </div>
              </div>`;
    })
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `NO notes Available.<br>Kindly use "Add note" section to add your desired note.`;
    }
}
// function to delete a note
function deleteNote(index) {
    console.log("Deleted!", index)
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    } else {
        notesObj.splice(index, 1)
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
    }
}
// Search Txt
let search = document.getElementById('searchTxt');
search.addEventListener('input', function() {
    let inputVal = search.value;
    console.log("Input event fired!", inputVal);
    let notesCards = document.getElementsByClassName('cards');
    Array.from(notesCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})