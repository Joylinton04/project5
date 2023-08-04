const title = document.querySelector('div .title-bar')
const main = document.querySelector('div .main')
const container = document.querySelector('div .container-1')
const head = document.querySelector('div .head')
const mobileIcon = document.querySelector('.menu-icon')
const mobileIconDiv = document.querySelector('.menu-icon div')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuD = document.querySelector('div .mobile-menu')
const img = document.querySelector('img')
const h1 = document.querySelector('h1')
const copy_right = document.querySelector('.logo2 h4')

const observer1 = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }

        if(entry.isIntersecting) observer1.unobserve(entry.target)
    }), {
        threshold: 1
    }
})

const hiddenElement = document.querySelectorAll('.hidden')
hiddenElement.forEach((el) => observer1.observe(el))

const observer2 = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('appear')
        } else {
            entry.target.classList.remove('appear')
        }

        if(entry.isIntersecting) observer2.unobserve(entry.target)
    }), {
        threshold: 1
    }
})

const appear = document.querySelectorAll('.hide')
appear.forEach((a) => observer2.observe(a))

mobileIcon.addEventListener('click', () => {
    if(mobileMenu.classList.contains('display-list')) {
        mobileMenu.classList.remove('display-list')
    } else {
        mobileMenu.classList.add('display-list')
    }
})

window.addEventListener('click', function(e) {
    if(e.target === img || e.target === h1 || e.target === title || e.target === head || e.target === main || e.target === container || e.target === mobileMenuD){
        mobileMenu.classList.add('display-list')
    }
});

function date() {
    const today = new Date()
    copy_right.innerHTML = `bright star vision &#169; ${today.getFullYear()}`

}
date()