// If user add a note , add it to the local storage
// we are using localstorage because we don't want that onreload or during revisiting the page our data clears.

showNotes()
const addTxt = document.getElementById("addTxt");
const addBtn = document
  .getElementById("addBtn")
  .addEventListener("click", (e) => {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
   //  console.log(notesObj);
    // console.log(createdTxt);

    showNotes();
  });
// function to show elements from localstorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.forEach((element, index) => {
    html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">Note-${index + 1}</h5>
       <p class="card-text">${element}</p>
       <button onclick = "deleteNote(this.id)" id = "${index}" class="btn btn-primary">Delete Note</button>
     </div>
   </div>`
  });
  let notesElm = document.getElementById("notes");
  if(notesObj.length += 0){
     notesElm.innerHTML = html;
  }else{
     notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`
  }
}

//Function to delete a note

function deleteNote(index){
   // console.log(" i am deleting", index);
   let notes = localStorage.getItem("notes");
   if (notes == null) {
     notesObj = [];
   } else {
     notesObj = JSON.parse(notes);
   }
   
   notesObj.splice(index, 1);
   // Updating localstorage again to clear deleted Notes
   localStorage.setItem("notes", JSON.stringify(notesObj));
   showNotes();

 
}


let search = document.getElementById("searchTxt");
search.addEventListener("input", function(){
   let inputVal = search.value.toUpperCase();
   console.log("input Event Fired", inputVal);
   let noteCards = document.getElementsByClassName('noteCard');
   Array.from(noteCards).forEach(function(element){
      let cardTxt = element.getElementsByTagName("p")[0].innerText.toUpperCase();

      if(cardTxt.includes(inputVal)){
         element.style.display = "block";
      }else{
         element.style.display = "none";
      }
   });

});


/*
1. Add Title
2. add important checkbox
3. seprate notes by user
*/