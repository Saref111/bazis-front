
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
const ProjectSwiperOne = new Swiper('.containerOne', {
    slidesPerView: 1,
    initialSlide: 0,
    watchOverflow: true,
    setWrapperSize: true,
    spaceBetween: 30,
    pagination: {
        el: '.img-container__pag--one',
        type: 'bullets',
        bulletClass: 'img-container__pag-button',
        bulletActiveClass: 'img-container__pag-button--active',
        clickable: true,
        renderBullet: function (index, className) {
            return `<button class="${className}">
                <span class="visually-hidden">Слайд ${index}</span>
            </button>`;
        }
    },
});

const ProjectSwiperTwo = new Swiper('.containerTwo', {
    slidesPerView: 1,
    initialSlide: 0,
    watchOverflow: true,
    setWrapperSize: true,
    spaceBetween: 30,
    pagination: {
        el: '.img-container__pag--two',
        type: 'bullets',
        bulletClass: 'img-container__pag-button',
        bulletActiveClass: 'img-container__pag-button--active',
        clickable: true,
        renderBullet: function (index, className) {
            return `<button class="${className}">
                <span class="visually-hidden">Слайд ${index}</span>
            </button>`;
        }
    },
});

const ProjectSwiperThree = new Swiper('.containerThree', {
    slidesPerView: 1,
    initialSlide: 0,
    watchOverflow: true,
    setWrapperSize: true,
    spaceBetween: 30,
    pagination: {
        el: '.img-container__pag--three',
        type: 'bullets',
        bulletClass: 'img-container__pag-button',
        bulletActiveClass: 'img-container__pag-button--active',
        clickable: true,
        renderBullet: function (index, className) {
            return `<button class="${className}">
                <span class="visually-hidden">Слайд ${index}</span>
            </button>`;
        }
    },
});

const ProjectSwiperFour = new Swiper('.containerFour', {
    slidesPerView: 1,
    initialSlide: 0,
    watchOverflow: true,
    setWrapperSize: true,
    spaceBetween: 30,
    pagination: {
        el: '.img-container__pag--four',
        type: 'bullets',
        bulletClass: 'img-container__pag-button',
        bulletActiveClass: 'img-container__pag-button--active',
        clickable: true,
        renderBullet: function (index, className) {
            return `<button class="${className}">
                <span class="visually-hidden">Слайд ${index}</span>
            </button>`;
        }
    },
});

const ReviewsSwiper = new Swiper('.reviews', {
    spaceBetween: 20,
    slidesPerView: 1.11,
})