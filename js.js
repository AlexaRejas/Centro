/*Script para el botón de menú en celulares*/
function myFunction() {
    var x = document.getElementById("myMenu"); /*Declara una variable "x" y la inicializa con 
    el elemento del DOM que tiene el atributo "id" igual a "myMenu". */

    if (x.className === "menu") { /*Comprueba si la clase del elemento "x" es igual a "menu". */

      x.className += " responsive"; /*Si es así, agrega la clase "responsive" al elemento "x".*/
    } else { 
      x.className = "menu"; /* Si no es así, establece la clase del elemento "x" en "menu".*/
    }
  }

  /*NOTA:
  cuando se hace clic en un botón o enlace, lo que puede ser útil para hacer que el menú sea 
  más amigable para dispositivos móviles.*/

  function mostrarMision() {
    var misionInfo = document.getElementById("mision-info");
    misionInfo.style.display = "flex";
}

function cerrarMision() {
    var misionInfo = document.getElementById("mision-info");
    misionInfo.style.display = "none";
}

function mostrarVision() {
    var visionInfo = document.getElementById("vision-info");
    visionInfo.style.display = "flex";
}

function cerrarVision() {
    var visionInfo = document.getElementById("vision-info");
    visionInfo.style.display = "none";
}

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');

let currentIndex = 0;

function showItem(index) {
  if (index < 0) {
    index = carouselItems.length - 1;
  } else if (index >= carouselItems.length) {
    index = 0;
  }

  carousel.style.transform = `translateX(-${index * carouselItems[0].offsetWidth}px)`;
  
  currentIndex = index;
}

function prevItem() {
  showItem(currentIndex - 1);
}

function nextItem() {
  showItem(currentIndex + 1);
}

prevButton.addEventListener('click', prevItem);
nextButton.addEventListener('click', nextItem);

showItem(currentIndex);
