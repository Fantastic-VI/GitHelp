/* global MainConstructor */
'use strict';
const a = new MainConstructor ([]);
//link the options inside GitHelp scroll (fill the list)

const listItem = document.getElementById('items');
a.fillTheList(listItem);

// function for handling the sumbit, at first, it takes the items after submit, stores it inside variables, sent it
// to the main page for adding it to the total and uploading it to the local storage, at last, we need to
// reset the event target.
function handlesubmit (event) {
  event.preventDefault();
  if(event.target.name.value && Number(event.target.phone.value) && event.target.time.value && event.target.location.value){
    addSelectedService();
    a.saveToLocalStorage();
    event.target.reset();
  }
}
const gitHelpForm = document.getElementById('form');
gitHelpForm.addEventListener('submit' , handlesubmit);

function addSelectedService () {
  console.log(event.target.items.value);
  let item = Number (event.target.items.value);
  let name = event.target.name.value;
  let location = event.target.location.value;
  let time = event.target.time.value;
  let phone = Number( event.target.phone.value );
  a.addItem(name, phone , location , time , item);
}
