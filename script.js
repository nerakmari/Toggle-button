"use strict";

/* Toggle for the Hamburger Menu*/
 const burgerMenu = document.querySelector ('.ham-toggle');
burgerMenu.addEventListener('click', function(){

  const navMenu = document.querySelector (".nav");
  navMenu.classList.toggle("hidden");
});

/* Toggle for the Icon*/
const arrowIcon = document.querySelector('#arrowIcon'); 
  
function stopSpinning() {
  arrowIcon.classList.toggle("fa-spin");
} 

arrowIcon.addEventListener('click', stopSpinning);
