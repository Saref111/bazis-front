
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
    initialSlide: 1,
    watchOverflow: false,
});
const ProjectSwiper = new Swiper('#container', {
    slidesPerView: 1,
    initialSlide: 0,
    watchOverflow: true,
    setWrapperSize: true,
    spaceBetween: 30,
    pagination: {
        el: '.img-container__pag',
        type: 'bullets',
        bulletClass: 'img-container__pag-button',
        bulletActiveClass: 'img-container__pag-button--active',
        clickable: true,
        renderBullet: function (index, className) {
            console.log(className)
            return `<button class="${className}">
                <span class="visually-hidden">Слайд ${index}</span>
            </button>`;
        }
    },
});