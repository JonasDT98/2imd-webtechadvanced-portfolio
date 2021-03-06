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
    // remove the item from screen and from localstorage
    document.getElementById("taskList").removeChild(this);
    let note = this.innerHTML;

    let noteA = JSON.parse(localStorage.getItem("noteA"));
    let index = noteA.indexOf(note);
    noteA.splice(index, 1);
    localStorage.setItem("noteA", JSON.stringify(noteA));
  }
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");

    // HINT🤩
    // pressing the enter key in the text field triggers the createNote function
    this.txtTodo = document.getElementById("taskInput");
    this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    // read up on .bind() -> we need to pass the current meaning of this to the eventListener
    // when the app loads, we can show previously saved noted from localstorage
    this.loadNotesFromStorage();


  }

  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen

    let noteA = localStorage.getItem("noteA");
    noteA = JSON.parse(noteA);

    if (noteA != null){
      for (let i = 0; i < noteA.length; i++){
        let noteN = new Note(noteA[i]);
        noteN.add();
      }
    }

  }

  createNote(e) {
    // this function should create a new note by using the Note() class
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // clear the text field with .reset in this class

    if (e.key === "Enter") {
      e.preventDefault();
      let noteN = new Note(this.txtTodo.value);
      noteN.add();
      noteN.saveToStorage();
      this.reset();
    }
  }

  reset() {
    // this function should reset the form / clear the text field
    this.txtTodo.value = "";
  }
}

let app = new App();
