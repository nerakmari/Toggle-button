/*"use strict";*/

/* Toggle for the Hamburger Menu*/
burgerMenu = document.querySelector ('.ham-toggle');
burgerMenu.addEventListener('click', function(){

  const navMenu = document.querySelector (".nav");
  navMenu.classList.toggle("hidden");
});

/* Toggle for the Icon*/
function stopSpinning() {

  var element = document.getElementById("arrowIcon");
  element.classList.toggle("fa-spin");
} 

const arrowIcon = document.querySelector('#arrowIcon');
arrowIcon.addEventListener('click', stopSpinning);
