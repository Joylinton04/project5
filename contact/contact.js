const main = document.querySelector('div .title-bar')
const mobileIcon = document.querySelector('.menu-icon')
const mobileIconDiv = document.querySelector('div .mobile-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const h1 = document.querySelector('h1')
const p= document.querySelector('p')
const containerC = document.querySelector('div.container')
const title = document.querySelector('div.title')
const submit = document.querySelector('#submit')
const userName = document.querySelector('#name')
const phone = document.querySelector('#phone')
const e_mail = document.querySelector('#email')
const subject = document.querySelector('#subject')
const message = document.querySelector('#message')

mobileIcon.addEventListener('click', () => {
    if(mobileMenu.classList.contains('display-list')) {
        mobileMenu.classList.remove('display-list')
    } else {
        mobileMenu.classList.add('display-list')
    }
})

window.addEventListener('click', function(e) {
    if(e.target === main || e.target === h1 || e.target === mobileIconDiv || e.target === p || e.target === containerC || e.target === title) {
        mobileMenu.classList.add('display-list')
    }
})

/* submit.addEventListener('click', (e) => {
    e.preventDefault()
}) */
