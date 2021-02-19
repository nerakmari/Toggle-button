hamBTN = document.querySelector ('.ham-toggle');
hamBTN.addEventListener('click', function(){
  const navMenu = document.querySelector (".navigation");
  navMenu.classList.toggle("hidden");
});

function stopSpinning() {
  var element = document.getElementById("arrowIcon");
  element.classList.remove("fa-spin");
} 
