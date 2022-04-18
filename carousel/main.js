//Capturamos los elementos necesarios del DOM
const containerCarrousel = document.querySelector('.carrousel-container');
const btnPrev = document.querySelector('.btn-prev'); // items = 'left'
const btnNext = document.querySelector('.btn-next'); // items = 'right'
//Agregamos el width de nuestras cards
let cardWidth = 160;
//Creamos una variable que nos permitira calcular el movimiento del scroll
let scrollNum = 0;

const carousel = (items) => {
    //containerWidth es el ancho de nuestro contenedor que contiene nuestras Cards
    let containerWidth = containerCarrousel.clientWidth;
    //ScrollWidth es el tamaño del Scroll de containerCarrousel
    let scrollWidth = containerCarrousel.scrollWidth;
    //La resta de los anteriores nos dará un valor actualizable, que usaremos para dar un limite al carousel
    let maxScroll = scrollWidth - containerWidth;

    if(items == 'right') {
        //Si scrollNum es menor a maxScroll la funcion se ejecutara sumando hacia la derecha el ancho de una Card
        if (maxScroll > scrollNum) {
            scrollNum += cardWidth;
            containerCarrousel.scroll(scrollNum, 0);
        }
    }

    else if (items == 'left') {
        //Si maxScroll es mayor a 0 la funcion se ejecutara moviendo restando hacia la izquierda el ancho de una Card
        if(maxScroll > 0) {
            scrollNum -= cardWidth;
            containerCarrousel.scroll(scrollNum, 0);
        }
    }

    else if (items == 'disableLeft') {
        //Si scrollNUm es menor que 160 el botonIzquierdo se desabilitará
        if(scrollNum < 160) {
            btnPrev.disabled = true;
        }
    }

    else if(items == 'disableRight') {
        //Si scrollNum es igual a maxScroll el botonDerecho se desabilitará
        if(scrollNum > maxScroll) {
            btnNext.disabled = true;
        }
    }
}

btnNext.addEventListener ('click', () => {
    //Ejecuta la funcion y parametros
    carousel('right');
    carousel('disableRight');
    btnPrev.disabled = false;
})

btnPrev.addEventListener('click', () => {
    //Ejecuta la funcion y parametros
    carousel('left');
    carousel('disableLeft');
    btnNext.disabled = false;
})
