// RESPONSIVE HAM MENU 

const ham = document.querySelector(".ham");
const offscreen = document.querySelector(".offscreen");

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    offscreen.classList.toggle("active");
    offscreen.removeAttribute('inert');
    ham.setAttribute('inert', '');
  });

const offscreenx = document.querySelector(".offscreenx");

offscreenx.addEventListener("click", () => {
  ham.classList.toggle("active");
  ham.removeAttribute('inert');
  offscreen.classList.toggle("active");
  offscreen.setAttribute('inert', '');
});

// REMOVE OFFSCREEN MENU WHEN LINK IS CLICKED

// Select links in offscreen menu
const offscreenList = document.querySelector(".offscreen");
const offscreenLinks = offscreenList.querySelectorAll("a");

// event listener = if link clicked, offscreenx toggle active
offscreenLinks.forEach((link) => {
  link.addEventListener("click", () => {
    offscreen.classList.toggle("active");
    ham.removeAttribute('inert');
  });
});

//HIDING NAV BAR WHILE SCROLLING DOWN

// keep track of previous scroll pos.
let prevScroll = window.pageYOffset;

window.onscroll = function () {

 //keep track of current scroll pos. 
  let currentScroll = window.pageYOffset;
  
 //if scrolled down, activate scroll function at 97.63 y-axis  
  if (currentScroll > 97.63) {
    if (currentScroll > prevScroll ) {
          document.getElementById("nav").style.top = "-100px";
        } else {
          document.getElementById("nav").style.top = "0";
        };
  };
  
// hide empty space behind nav when on hero
  if (currentScroll < 97.63) {
    document.getElementById("nav").style.top = "0";
    document.getElementById("nav").style.transition = "none";
  } else {
    document.getElementById("nav").style.transition = "0.3s ease";
  };

  // resets prevScroll so it would change accordingly each time function is called
  prevScroll = currentScroll;
};

//SVC LOGIC

const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');
const dot4 = document.querySelector('.dot4');

const svcbox1 = document.querySelector('.svcbox1');
const svcbox2 = document.querySelector('.svcbox2');
const svcbox3 = document.querySelector('.svcbox3');
const svcbox4 = document.querySelector('.svcbox4');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const dotArr = [card1, card2, card3, card4];

let currInd = 0;

const nextButton = () => {
  currInd += 1; 

  if(currInd > 3) {
    currInd = 0;
  }

  dotArr[currInd]();
};

const prevButton = () => {
  currInd -= 1; 

  if(currInd < 0) {
    currInd = 3;
  }

  dotArr[currInd]();
};



next.addEventListener('click', nextButton);
prev.addEventListener('click', prevButton);


function card1() {
  currInd = 0;

  svcbox1.style.display = 'block';
  svcbox2.style.display = 'none';
  svcbox3.style.display = 'none';
  svcbox4.style.display = 'none';

  dot1.style.backgroundColor = '#717171';
  dot2.style.backgroundColor = '#bbb';
  dot3.style.backgroundColor = '#bbb';
  dot4.style.backgroundColor = '#bbb';
}

function card2() {
  currInd = 1;

  svcbox1.style.display = 'none';
  svcbox2.style.display = 'block';
  svcbox3.style.display = 'none';
  svcbox4.style.display = 'none';

  dot1.style.backgroundColor = '#bbb';
  dot2.style.backgroundColor = '#717171';
  dot3.style.backgroundColor = '#bbb';
  dot4.style.backgroundColor = '#bbb';
}

function card3() {
  currInd = 2;

  svcbox1.style.display = 'none';
  svcbox2.style.display = 'none';
  svcbox3.style.display = 'block';
  svcbox4.style.display = 'none';

  dot1.style.backgroundColor = '#bbb';
  dot2.style.backgroundColor = '#bbb';
  dot3.style.backgroundColor = '#717171';
  dot4.style.backgroundColor = '#bbb';
}

function card4() {
  currInd = 3;

  svcbox1.style.display = 'none';
  svcbox2.style.display = 'none';
  svcbox3.style.display = 'none';
  svcbox4.style.display = 'block';

  dot1.style.backgroundColor = '#bbb';
  dot2.style.backgroundColor = '#bbb';
  dot3.style.backgroundColor = '#bbb';
  dot4.style.backgroundColor = '#717171';
}

dot1.addEventListener('click', card1);
dot2.addEventListener('click', card2);
dot3.addEventListener('click', card3);
dot4.addEventListener('click', card4);

// TEAM LOGIC

const tmdot1 = document.querySelector(".tmdot1");
const tmdot2 = document.querySelector(".tmdot2");
const tmdot3 = document.querySelector(".tmdot3");
const tmdot4 = document.querySelector(".tmdot4");
const tmdot5 = document.querySelector(".tmdot5");
const tmdot6 = document.querySelector(".tmdot6");

const joel = document.querySelector('.joel');
const nolly = document.querySelector('.nolly');
const ermin = document.querySelector('.ermin');
const simon = document.querySelector('.simon');
const vessel = document.querySelector('.vessel');
const acle = document.querySelector('.acle');

const tmprev = document.querySelector('.teamprev');
const tmnext = document.querySelector('.teamnext');

const tmdotArr = [tmcard1, tmcard2, tmcard3, tmcard4, tmcard5, tmcard6];

let tmcurrInd = 0;

const tmnextButton = () => {
  tmcurrInd += 1; 

  if(tmcurrInd > 5) {
    tmcurrInd = 0;
  }

  tmdotArr[tmcurrInd]();
};

const tmprevButton = () => {
  tmcurrInd -= 1; 

  if(tmcurrInd < 0) {
    tmcurrInd = 5;
  }

  tmdotArr[tmcurrInd]();
};

tmprev.addEventListener('click', tmprevButton);
tmnext.addEventListener('click', tmnextButton);

function tmcard1() {
  tmcurrInd = 0;

  joel.style.display = 'block';
  nolly.style.display = 'none';
  ermin.style.display = 'none';
  simon.style.display = 'none';
  vessel.style.display = 'none';
  acle.style.display = 'none';

  tmdot1.style.backgroundColor = '#717171';
  tmdot2.style.backgroundColor = '#bbb';
  tmdot3.style.backgroundColor = '#bbb';
  tmdot4.style.backgroundColor = '#bbb';
  tmdot5.style.backgroundColor = '#bbb';
  tmdot6.style.backgroundColor = '#bbb';
}

function tmcard2() {
  tmcurrInd = 1;

  joel.style.display = 'none';
  nolly.style.display = 'block';
  ermin.style.display = 'none';
  simon.style.display = 'none';
  vessel.style.display = 'none';
  acle.style.display = 'none';

  tmdot1.style.backgroundColor = '#bbb';
  tmdot2.style.backgroundColor = '#717171';
  tmdot3.style.backgroundColor = '#bbb';
  tmdot4.style.backgroundColor = '#bbb';
  tmdot5.style.backgroundColor = '#bbb';
  tmdot6.style.backgroundColor = '#bbb';
}

function tmcard3() {
  tmcurrInd = 2;

  joel.style.display = 'none';
  nolly.style.display = 'none';
  ermin.style.display = 'block';
  simon.style.display = 'none';
  vessel.style.display = 'none';
  acle.style.display = 'none';

  tmdot1.style.backgroundColor = '#bbb';
  tmdot2.style.backgroundColor = '#bbb';
  tmdot3.style.backgroundColor = '#717171';
  tmdot4.style.backgroundColor = '#bbb';
  tmdot5.style.backgroundColor = '#bbb';
  tmdot6.style.backgroundColor = '#bbb';
}

function tmcard4() {
  tmcurrInd = 3;

  joel.style.display = 'none';
  nolly.style.display = 'none';
  ermin.style.display = 'none';
  simon.style.display = 'block';
  vessel.style.display = 'none';
  acle.style.display = 'none';

  tmdot1.style.backgroundColor = '#bbb';
  tmdot2.style.backgroundColor = '#bbb';
  tmdot3.style.backgroundColor = '#bbb';
  tmdot4.style.backgroundColor = '#717171';
  tmdot5.style.backgroundColor = '#bbb';
  tmdot6.style.backgroundColor = '#bbb';
}

function tmcard5() {
  tmcurrInd = 4;

  joel.style.display = 'none';
  nolly.style.display = 'none';
  ermin.style.display = 'none';
  simon.style.display = 'none';
  vessel.style.display = 'block';
  acle.style.display = 'none';

  tmdot1.style.backgroundColor = '#bbb';
  tmdot2.style.backgroundColor = '#bbb';
  tmdot3.style.backgroundColor = '#bbb';
  tmdot4.style.backgroundColor = '#bbb';
  tmdot5.style.backgroundColor = '#717171';
  tmdot6.style.backgroundColor = '#bbb';
}

function tmcard6() {
  tmcurrInd = 5;

  joel.style.display = 'none';
  nolly.style.display = 'none';
  ermin.style.display = 'none';
  simon.style.display = 'none';
  vessel.style.display = 'none';
  acle.style.display = 'block';

  tmdot1.style.backgroundColor = '#bbb';
  tmdot2.style.backgroundColor = '#bbb';
  tmdot3.style.backgroundColor = '#bbb';
  tmdot4.style.backgroundColor = '#bbb';
  tmdot5.style.backgroundColor = '#bbb';
  tmdot6.style.backgroundColor = '#717171';
}

tmdot1.addEventListener('click', tmcard1);
tmdot2.addEventListener('click', tmcard2);
tmdot3.addEventListener('click', tmcard3);
tmdot4.addEventListener('click', tmcard4);
tmdot5.addEventListener('click', tmcard5);
tmdot6.addEventListener('click', tmcard6);