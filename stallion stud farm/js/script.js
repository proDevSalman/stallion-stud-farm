
let horse1 = document.querySelector('.horse1 img')
let horse2 = document.querySelector('.horse2 img')
let horse3 = document.querySelector('.horse3 img')
let horse4 = document.querySelector('.horse4 img')

let modalwindow = document.querySelector('.modalWindow')
let modalWindowImg = modalwindow.querySelector('img')
let imgCon = modalwindow.querySelector('.imgContainer')
let dismiss = modalwindow.querySelector('.dismissContainer')

let priceDesc = ''

console.log(horse1, horse2, horse3, horse4, modalwindow, modalWindowImg, dismiss)

horse1.addEventListener('click', () => {
    modalWindowImg.setAttribute('src', 'images/bgImages/p1.jpg')
    modalwindow.classList.add('display')
    priceDesc = document.createElement('div')
    let desc = document.createTextNode('Breed: Andalusion, Age: 3 years, Price: 50,000 AUD')
    priceDesc.appendChild(desc)
    priceDesc.setAttribute('class', 'priceDesc')
    imgCon.appendChild(priceDesc)
})

horse2.addEventListener('click', () => {
    modalWindowImg.setAttribute('src', 'images/bgImages/p2.jpg')
    modalwindow.classList.add('display')
    priceDesc = document.createElement('div')
    let desc = document.createTextNode('Breed: Percheron, Age: 3.5 years, Price: 45,000 AUD')
    priceDesc.appendChild(desc)
    priceDesc.setAttribute('class', 'priceDesc')
    imgCon.appendChild(priceDesc)
})

horse3.addEventListener('click', () => {
    modalWindowImg.setAttribute('src', 'images/bgImages/p3.jpg')
    modalwindow.classList.add('display')
    priceDesc = document.createElement('div')
    let desc = document.createTextNode('Breed: Mustang, Age: 4 years, Price: 65,000 AUD')
    priceDesc.appendChild(desc)
    priceDesc.setAttribute('class', 'priceDesc')
    imgCon.appendChild(priceDesc)
})

horse4.addEventListener('click', () => {
    modalWindowImg.setAttribute('src', 'images/bgImages/p4.jpg')
    modalwindow.classList.add('display')
    priceDesc = document.createElement('div')
    let desc = document.createTextNode('Breed: Holsteiner, Age: 5 years, Price: 70,000 AUD')
    priceDesc.appendChild(desc)
    priceDesc.setAttribute('class', 'priceDesc')
    imgCon.appendChild(priceDesc)
})

dismiss.addEventListener('click', () => {
    modalwindow.classList.remove('display')
    console.log(priceDesc.remove())
})

// smooth scrolling

let navLinks = document.querySelectorAll('.navLink')

navLinks[0].addEventListener('click', () => {
        smoothScroll({toElement: document.getElementById('home'), duration: 2500, easing: 'easeInOutCirc'})
})

navLinks[1].addEventListener('click', () => {
    smoothScroll({toElement: document.getElementById('about'), duration: 2500, easing: 'easeInOutCirc'})
})

navLinks[2].addEventListener('click', () => {
    smoothScroll({toElement: document.getElementById('gallery'), duration: 2500, easing: 'easeInOutCirc'})
})

navLinks[3].addEventListener('click', () => {
    smoothScroll({toElement: document.getElementById('pricing'), duration: 2500, easing: 'easeInOutCirc'})
})

navLinks[4].addEventListener('click', () => {
    smoothScroll({toElement: document.getElementById('contact'), duration: 2500, easing: 'easeInOutCirc'})
})