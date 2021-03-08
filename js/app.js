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
let ult = false;
let bool = true;
let imageStatus = true;
function DarkMode() {
  if ( document.getElementById('v2').checked === true){
    ult = document.getElementById('v2').checked;
    document.getElementById('v2').checked = false;
    let element7 = document.body;
    let element8 = document.querySelector('header');
    let element9 = document.querySelector('footer');
    element7.classList.toggle('Light-mode');
    element8.classList.toggle('Light-mode');
    element9.classList.toggle('Light-mode');
    document.querySelector('img').style.filter = 'none';
  }
  let element = document.body;
  let element2 = document.querySelector('header');
  let element3 = document.querySelector('footer');
  if (imageStatus === true){
    document.getElementById('logo').src = '../images/black.png';
    imageStatus = false;
    ult = false;
  }
  else if (imageStatus === false && ult === true){
    document.getElementById('logo').src = '../images/black.png';
    ult = false;
  }
  else if ( imageStatus === false && ult === false ){
    document.getElementById('logo').src = '../images/white.png';
    imageStatus = true;
  }
  element.classList.toggle('dark-mode');
  element2.classList.toggle('dark-mode');
  element3.classList.toggle('dark-mode');
  if (bool === true) {
    document.querySelector('img').style.filter = 'drop-shadow(8px 8px 10px gray)';
    bool = false;
  }
  else {
    bool = true;
    document.querySelector('img').style.filter = 'none';
  }

}

let bool2 = true;
function LightMode() {
  if (document.getElementById('v1').checked){
    document.getElementById('v1').checked = false;
    let element4 = document.body;
    let element5 = document.querySelector('header');
    let element6 = document.querySelector('footer');
    element4.classList.toggle('dark-mode');
    element5.classList.toggle('dark-mode');
    element6.classList.toggle('dark-mode');
    document.querySelector('img').style.filter = 'none';
  }
  let element = document.body;
  let element2 = document.querySelector('header');
  let element3 = document.querySelector('footer');
  element.classList.toggle('Light-mode');
  element2.classList.toggle('Light-mode');
  element3.classList.toggle('Light-mode');
  if (bool2 === true) {
    document.querySelector('img').style.filter = 'contrast(200%)';
    bool2 = false;
  }
  else {
    bool2 = true;
    document.querySelector('img').style.filter = 'none';
  }
  document.getElementById('logo').src = '../images/white.png';
}

/*end of color contrast*/



/* */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// const dotesContainer = document.getElementById('dotesContainer');

// for(let i = 0; slides.length; i ++){
// const dotElement = document.createElement('span');
// dotesContainer.appendChild(dotElement);
// dotElement.class = 'dot';
// }



const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
    dots.forEach((dot, index) => {
      dot.classList.remove('active');
    });
  });
  slides[n].style.display = 'block';
  dots[n].classList.add('active');
};
document.addEventListener('DOMContentLoaded', init(currentSlide));
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
  init(currentSlide);
};

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--;
  init(currentSlide);
};

document.querySelector('.next').addEventListener('click', next);

document.querySelector('.prev').addEventListener('click', prev);


setInterval(() => {
  next();
}, 7000);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    console.log(currentSlide);
    init(i);
    currentSlide = i;
  });
});
