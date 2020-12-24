
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

const TabsComponent = {
    data() {
        return {
            currentTab: 1,
        }
    },
    methods: {
        isCurrent(id) {
            return id === this.currentTab
        },
        setCurrent(id) {
            return this.currentTab = id
        }
    }
}



Vue.createApp(NavigationComponent).mount('#navigation')
Vue.createApp(TabsComponent).mount('#tabs')
const ListSwiper = new Swiper ('.tabs__slide-wrapper', {
    setWrapperSize: true,
    spaceBetween: 0,
    slidesPerView: 1.16,
    initialSlide: 1
})