'use strict';
const MainConstructor = function (items) {
  this.items = items;
};
//this function is for adding items to the main items, so we can use it in multiple pages
MainConstructor.prototype.addItem = function (name, phone , location , time , item) {
  const localPrevious = JSON.parse(localStorage.getItem('a')) || [];
  if(this.items.length === 0){
    for (let j = 0 ; j < localPrevious.length ; j++ ) {
      const olditems = new Adding(localPrevious[j].name,localPrevious[j].phone,localPrevious[j].location,localPrevious[j].time,localPrevious[j].item);
      this.items.push(olditems);
    }
  }
  const newItem = new Adding (name, phone , location , time , item);
  this.items.push(newItem);
};

const Adding = function(name, phone , location , time , item) {
  this.name = name;
  this.phone = phone;
  this.item = item;
  this.location = location;
  this.time = time;
};
// this code is for adding to the main scroll in both the GitHelp and GiveHelp pages
const Help = function(typeOfHelp) {
  this.name = typeOfHelp;
  Help.all.push ( this );
};
Help.all = [];
//this function is for the list to be added
function generateList () {
  new Help ('reading');
  new Help ('recording');
  new Help ('Psycological');
  new Help ( 'Exam Writting' );
  new Help ( 'Deliver' );
}
generateList();


MainConstructor.prototype.saveToLocalStorage = function() {
  localStorage.setItem('a', JSON.stringify(this.items));
};

MainConstructor.prototype.fillTheList = function (listItem) {
  for (let i = 0 ; i < Help.all.length ; i++) {
    const help = document.createElement('option');
    help.setAttribute('value' , i);
    listItem.appendChild(help);
    help.textContent = Help.all[i].name;
  }
};

MainConstructor.prototype.removeItem = function (num) {
  this.items.splice(num, 1);
  console.log(num);
};
