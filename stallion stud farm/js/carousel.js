
let carousel = document.querySelector('.carouselSlides')
let buttonLeft = document.querySelector('#buttonLeft')
let buttonRight = document.querySelector('#buttonRight')

console.log(buttonLeft)
console.log(buttonRight)

let carouselPosition = 0;
// carousel.style.transform ='translateX(-100%)'

buttonRight.addEventListener('click', () => {
    if (carouselPosition > -700) {
        carouselPosition -= 100
        carousel.style.transform = 'translateX(' + carouselPosition + '%)'
    }
})

buttonLeft.addEventListener('click', () => {
    if (carouselPosition < 0) {
        carouselPosition += 100
        carousel.style.transform = 'translateX(' + carouselPosition + '%)'
    }
})