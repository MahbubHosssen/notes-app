const button = document.querySelector("button")
const noteContainer = document.querySelector(".note-container")

function createNote(){
    const note = document.createElement("div")
    note.classList.add("notes")

    note.innerHTML = `
    <p contenteditable="true">
        <img id="deleteBtn" src="./images/delete.png" alt="">
    </p>
    `
    noteContainer.appendChild(note)

    const deleteBtn = document.querySelectorAll("#deleteBtn")
    deleteBtn.forEach(delBtn => {
        delBtn.addEventListener("click", deleteNote)
    })
}
function deleteNote(){
    const selectedNote = this.parentElement.parentElement;
    noteContainer.removeChild(selectedNote)
}


button.addEventListener("click", createNote)