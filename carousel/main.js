//scrollWidth: 2550
//containerWidth: 1016
//1534 = max ScrollLeft = scrollWidth - containerWidth

const containerCarrousel = document.querySelector('.carrousel-container');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
let cardWidth = 160;
let scrollNum = 0;

const carrousel = (direction) => {
    let containerWidth = containerCarrousel.clientWidth;
    let scrollWidth = containerCarrousel.scrollWidth;
    let maxScroll = scrollWidth - containerWidth;

    if(direction == 'right') {
        if (maxScroll > scrollNum) {
            scrollNum += cardWidth;
            containerCarrousel.scroll(scrollNum, 0);
        }
    }

    else if (direction == 'left') {
        if(maxScroll > 0) {
            scrollNum -= cardWidth;
            containerCarrousel.scroll(scrollNum, 0);
        }
    }

    else if (direction == 'disableLeft') {
        if(scrollNum < 160) {
            btnPrev.disabled = true;
        }
    }

    else if(direction == 'disableRight') {
        if(scrollNum > maxScroll) {
            btnNext.disabled = true;
        }
    }
}

btnNext.addEventListener ('click', () => {
    carrousel('right');
    carrousel('disableRight');
    btnPrev.disabled = false;
})

btnPrev.addEventListener('click', () => {
    carrousel('left');
    carrousel('disableLeft');
    btnNext.disabled = false;
})

