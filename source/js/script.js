
const NavigationComponent = {
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMobileMenu() {
            this.isMenuOpen = !this.isMenuOpen
        }
    }
}

const ListSwiper = new Swiper ('.tabs', {
    setWrapperSize: true,
    spaceBetween: 0,
    slidesPerView: 1.16,
    
})

console.log(ListSwiper)

Vue.createApp(NavigationComponent).mount('#navigation')