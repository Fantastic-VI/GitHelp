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
  if(event.target.name.value && Number(event.target.phone.value) && event.target.time.value && event.target.location1.value){
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
  let location1 = event.target.location1.value;
  let location2 = event.target.location2.value;
  let location3 = event.target.location3.value;
  let time = event.target.time.value;
  let phone = Number( event.target.phone.value );
  let details = event.target.details.value;
  if(details === '')
  {
    details = 'No Details';
  }
  a.addItem(name, phone , location1 , location2 , location3 , time , item , details);
  document.getElementById('animations').style.visibility = 'visible';
  setTimeout(function(){location.reload(); } , 3000);
}
