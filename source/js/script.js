const App = Vue.createApp({
    data() {
        return {
            isFormPopup: false,
            currentTab: 1,
            isMenuOpen: false,
            clientName: '',
            clientPhoneNumber: '',
            clientEmail: '',
            clientMessage: '',
            formHasBeenSent: false,
            formHasNotBeenSent: false,
        }
    },
    methods: {
        toggleForm() {
            this.isFormPopup = !this.isFormPopup
        },
        toggleMobileMenu() {
            this.isMenuOpen = !this.isMenuOpen

            if (this.isFormPopup) {
                this.closeFormPopup()
            }
        },
        closeFormPopup() {
            this.isFormPopup = false
        },
        isCurrent(id) {
            return id === this.currentTab
        },
        setCurrent(id) {
            return this.currentTab = id
        },
        sendForm() {
            fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    clientName: this.clientName,
                    clientPhoneNumber: this.clientPhoneNumber,
                    clientEmail: this.clientEmail,
                    clientMessage: this.clientMessage,
                }),
            }).then((res) => {
                if (res.status === 200) {
                    this.successHandler()
                } else {
                    this.errorHandler()
                }
            }, this.errorHandler)
        },
        successHandler(res) {
            console.log(res)
            this.formHasBeenSent = true
        },
        errorHandler() {
            this.formHasNotBeenSent = true
        },
        setLanguage(e) {
            document.cookie = 'lang=' + e.target.value
            location.reload()
        }
    },
}).mount('#app')


const ListSwiper = new Swiper ('.tabs__slide-wrapper', {
    setWrapperSize: true,
    spaceBetween: 0,
    slidesPerView: 1.16,
    initialSlide: 1,
    watchOverflow: false,
    breakpoints: {
        768: {
            spaceBetween: 50,
            slidesPerView: 'auto',
        },
        1600: {
            slidesPerView: 3,
            init: false
        },
    }
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
    slidesPerView: 'auto',
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 'auto',
            navigation: {
                prevEl: '.reviews__button--prev',
                nextEl: '.reviews__button--next'
            }
        }
    }
})