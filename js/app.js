'use strict';
const MainConstructor = function (items) {
  this.items = items;
};
//this function is for adding items to the main items, so we can use it in multiple pages
MainConstructor.prototype.addItem = function (name, phone, location1, location2, location3, time, item, details) {
  const localPrevious = JSON.parse(localStorage.getItem('a')) || [];
  if (this.items.length === 0) {
    for (let j = 0; j < localPrevious.length; j++) {
      const olditems = new Adding(localPrevious[j].name, localPrevious[j].phone, localPrevious[j].location1,localPrevious[j].location2,localPrevious[j].location3, localPrevious[j].time,localPrevious[j].item,localPrevious[j].details );
      this.items.push(olditems);
      console.log(olditems);
    }
  }
  const newItem = new Adding(name, phone, location1, location2, location3, time, item, details);
  this.items.push(newItem);
};
const Adding = function (name, phone, location1, location2, location3, time, item, details) {
  this.name = name;
  this.phone = phone;
  this.item = item;
  this.location1 = location1;
  this.location2 = location2;
  this.location3 = location3;
  this.time = time;
  this.details = details;
};
// this code is for adding to the main scroll in both the GitHelp and GiveHelp pages
const Help = function (typeOfHelp) {
  this.name = typeOfHelp;
  Help.all.push(this);
};
Help.all = [];
//this function is for the list to be added
function generateList() {
  new Help('Reading');
  new Help('Recording');
  new Help('Psycological');
  new Help('Exam Writting');
  new Help('Deliver');
}
generateList();
MainConstructor.prototype.saveToLocalStorage = function () {
  localStorage.setItem('a', JSON.stringify(this.items));
};
MainConstructor.prototype.fillTheList = function (listItem) {
  for (let i = 0; i < Help.all.length; i++) {
    const help = document.createElement('option');
    help.setAttribute('value', i);
    listItem.appendChild(help);
    help.textContent = Help.all[i].name;
  }
};
MainConstructor.prototype.removeItem = function (num) {
  this.items.splice(num, 1);
  console.log(num);
};
/*start of font sizing*/
function decreaseFontSizeBy1px() {
  let txt = document.querySelector('body');
  let style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  let currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize - 1) + 'px';
}
function increaseFontSizeBy1px() {
  let txt = document.querySelector('body');
  let style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  let currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize + 1) + 'px';
}
/*end of font sizing*/
/*start of color contrast*/

let indexes = false;
function DarkMode() {
  let el = document.getElementById('normal');
  let r = document.querySelector('body');
  // let element = document.body;
  // let element2 = document.querySelector('header');
  // let element3 = document.querySelector('footer');
  let imagesCount = document.querySelectorAll('img');
  if (document.getElementById('v1').checked === true) {
    document.getElementsByClassName('switch')[1].style.visibility = 'hidden';
    document.getElementsByClassName('DL')[1].style.visibility = 'hidden';
    document.getElementById('logo').src = '../images/black.png';
    // element.classList.toggle('dark-mode');
    // element2.classList.toggle('dark-mode');
    // element3.classList.toggle('dark-mode');
    for (let i = 1; i < imagesCount.length; i++) {
      document.getElementById(i).style.filter = 'grayscale(100%)';
    }
    // el.href = 'css/black.css';
    if (r.id === 'be' ) {
      el.href = 'css/black.css';
      indexes = true;
      console.log(1);
      document.getElementById('logo').src = './images/black.png';
    }
    else {
      el.href = '../css/black.css';
      document.getElementById('logo').src = '../images/black.png';
    }

  }
  else {
    document.getElementsByClassName('switch')[1].style.visibility = 'visible';
    document.getElementsByClassName('DL')[1].style.visibility = 'visible';
    // element.classList.toggle('dark-mode');
    // element2.classList.toggle('dark-mode');
    // element3.classList.toggle('dark-mode');
    for (let i = 1; i < imagesCount.length; i++) {
      document.getElementById(i).style.filter = 'none';
    }
    // el.href = 'css/style.css';
    if (indexes === true) {
      el.href = 'css/style.css';
      indexes = false;
      document.getElementById('logo').src = './images/black.png';
    }
    else {
      el.href = '../css/style.css';
      document.getElementById('logo').src = '../images/black.png';
    }
  }
}
let indexes2 = false;
function LightMode() {
  let el = document.getElementById('normal');
  let r = document.querySelector('body');
  // let element = document.body;
  // let element2 = document.querySelector('header');
  // let element3 = document.querySelector('footer');
  let imagesCount = document.querySelectorAll('img');
  if (document.getElementById('v2').checked === true) {
    document.getElementsByClassName('switch')[0].style.visibility = 'hidden';
    document.getElementsByClassName('DL')[0].style.visibility = 'hidden';
    // element.classList.toggle('Light-mode');
    // element2.classList.toggle('Light-mode');
    // element3.classList.toggle('Light-mode');
    for (let i = 1; i < imagesCount.length; i++) {
      document.getElementById(i).style.filter = 'contrast(200%)';
    }
    // el.href = 'css/white.css';
    if (r.id === 'be') {
      el.href = 'css/white.css';
      indexes2 = true;
      document.getElementById('logo').src = './images/white.png';
      console.log(1);
    }
    else {
      el.href = '../css/white.css';
      document.getElementById('logo').src = '../images/white.png';
    }
  }
  else {
    document.getElementsByClassName('switch')[0].style.visibility = 'visible';
    document.getElementsByClassName('DL')[0].style.visibility = 'visible';
    // element.classList.toggle('Light-mode');
    // element2.classList.toggle('Light-mode');
    // element3.classList.toggle('Light-mode');
    for (let i = 1; i < imagesCount.length; i++) {
      document.getElementById(i).style.filter = 'none';
    }
    // el.href = 'css/style.css';
    if (indexes2 === true) {
      el.href = 'css/style.css';
      indexes2 = false;
      document.getElementById('logo').src = './images/black.png';
    }
    else {
      el.href = '../css/style.css';
      document.getElementById('logo').src = '../images/black.png';
    }
  }
}
/*end of color contrast*/
