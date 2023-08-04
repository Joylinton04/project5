const main = document.querySelector('div .title-bar')
const mobileIcon = document.querySelector('.menu-icon')
const mobileIconDiv = document.querySelector('.menu-icon div')
const mobileMenu = document.querySelector('.mobile-menu')
const img = document.querySelector('div .img')
const divBg = document.querySelector('div .background-img')
const h1 = document.querySelector('h1')
const abt = document.querySelector('div#about')
const mobileMenuD = document.querySelector('div .mobile-menu')
const contain = document.querySelector('div .contain-img')
const video = document.querySelector('.video')
const thumbnail = document.querySelector('.thumbnail')


mobileIcon.addEventListener('click', () => {
    if(mobileMenu.classList.contains('display-list')) {
        mobileMenu.classList.remove('display-list')
    } else {
        mobileMenu.classList.add('display-list')
    }
})

window.addEventListener('click', function(e) {
    if(e.target === img || e.target === divBg || e.target === main || e.target === h1 || e.target === mobileMenuD || e.target === abt || e.target === contain) {
        mobileMenu.classList.add('display-list')
    }
})

const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));



