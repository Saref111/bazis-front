const menuButtonElement = document.querySelector('.header__menu-button')
const menuButtonIconElements = Array.from(menuButtonElement.querySelectorAll('svg'))
const navElement = document.querySelector('.nav')
const ownerInfoElement = document.querySelector('.owner-info')


const toggleMobileMenu = () => {
    menuButtonIconElements.forEach((icon) => {
        icon.classList.toggle('header__menu-icn--hidden')
    })
    navElement.classList.toggle('nav--visible')
}

toggleMobileMenu()

menuButtonElement.addEventListener('click', toggleMobileMenu)