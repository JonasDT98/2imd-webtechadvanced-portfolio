class Note {
  constructor(title) {
    this.title = title;
    // HINT🤩 this.element = this.createElement(title);
    this.element = this.createElement(title);
  }

  createElement(title) {
    let newNote = document.createElement("li");

    // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));
    newNote.addEventListener('click', this.remove.bind(newNote));
    newNote.innerHTML = title;
    return newNote;
  }

  add() {
    // HINT🤩
    // this function should append the note to the screen somehow
    //getElementById => for id & appendChild => Note
    document.getElementById("taskList").appendChild(this.element);
  }

  saveToStorage() {
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify

    let noteA = JSON.parse(localStorage.getItem("noteA")) || [];
      noteA.push(this.title);
      localStorage.setItem("noteA", JSON.stringify(noteA));

  }


  remove() {
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    // .removeChild(this)
    // remove the item from screen and from localstorage
  }
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");

    // HINT🤩
    // pressing the enter key in the text field triggers the createNote function
    // this.txtTodo = ???
    // this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    // read up on .bind() -> we need to pass the current meaning of this to the eventListener
    // when the app loads, we can show previously saved noted from localstorage
    // this.loadNotesFromStorage();
  }

  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
  }

  createNote(e) {
    // this function should create a new note by using the Note() class
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // clear the text field with .reset in this class
    // if (e.key === "Enter") || e.keyCode == 13
  }

  reset() {
    // this function should reset the form / clear the text field
  }
}

let app = new App();
