/* global MainConstructor */
// first, we need to fill the scroll list
const b = new MainConstructor ([]);
const listItem = document.getElementById('items2');
b.fillTheList(listItem);
let list;
let futureId = 300;
//link the options inside GitHelp scroll (fill the list)
const giveButton = document.getElementById('form2');
giveButton.addEventListener('submit', handlesubmit2 );
//handle the click when the submit button of type of helping is pressed
function handlesubmit2 (event) {
  let selectedItemId = Number (event.target.items2.value);
  event.preventDefault();
  renderTable(selectedItemId);
}
function renderTable (choice) {
  loadTable();
  clearTable();
  showTable(choice);
}
function loadTable () {
  const tableItems = JSON.parse(localStorage.getItem('a')) || [];
  console.log(tableItems);
  list = new MainConstructor(tableItems);
  console.log(list);
}
function clearTable () {
  const elements = document.querySelector('tbody');
  while(elements.firstChild){
    elements.removeChild(elements.firstChild);
  }
}
function showTable (choice) {
  const bodyElement = document.querySelector('tbody');
  for (let i in list.items){
    if(choice === Number (list.items[i].item)){
      const trElement = document.createElement('tr');
      bodyElement.appendChild(trElement);
      const td1Element = document.createElement('td');
      td1Element.textContent = list.items[i].name;
      trElement.appendChild(td1Element);
      const td2Element = document.createElement('td');
      td2Element.textContent = list.items[i].location;
      trElement.appendChild(td2Element);
      const td3Element = document.createElement('td');
      td3Element.textContent = list.items[i].phone;
      trElement.appendChild(td3Element);
      const td4Element = document.createElement('td');
      td4Element.textContent = list.items[i].time;
      trElement.appendChild(td4Element);
      const td5Element = document.createElement('td');
      td5Element.setAttribute('id', i );
      trElement.appendChild(td5Element);
      td5Element.textContent = 'X';
    }
  }
}
const approvalButton = document.getElementById('table');
approvalButton.addEventListener('click', giveapproval);
function giveapproval (event) {
  const check = event.target;
  if(check.nodeName === 'TD' && check.id){
    document.getElementById('volData').style.visibility = 'visible';
    futureId = check.id;
  }
}

const enterData = document.getElementById('enterData');
enterData.addEventListener('submit' , collectData);

function collectData (event) {
  event.preventDefault();
  if (event.target.name2.value && event.target.phone2.value) {
    alert('thanks for volunteering!!');
    list.removeItem(futureId);
    futureId = 300;
    event.target.reset();
    document.getElementById('volData').style.visibility = 'hidden';
    list.saveToLocalStorage();
    location.reload();
  }
}
