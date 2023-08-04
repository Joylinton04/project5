const mobileMenu = document.querySelector('.mobile-menu')
const mobileIcon = document.querySelector('.menu-icon')
const filterButtons = document.querySelectorAll('button')
const filterableImages = document.querySelectorAll('.images .img');

mobileIcon.addEventListener('click', () => {
    if(mobileMenu.classList.contains('display-list')) {
        mobileMenu.classList.remove('display-list')
    } else {
        mobileMenu.classList.add('display-list')
    }
})

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        document.querySelector('.active').classList.remove('active')
        e.target.classList.add("active")

        filterableImages.forEach(image => {
            image.classList.add("hide")
            if(image.dataset.filter === e.target.dataset.filter) {
                image.classList.remove("hide")
            }
        })
    })
}); 