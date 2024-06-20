import Swiper, { Navigation, Thumbs } from 'swiper';

Swiper.use([Thumbs, Navigation]);

const sliderOptions = {
    mainSlider: {
        slidesPerView: 1,
        autoHeight: true,
        thumbs: {
            swiper: null
        },
    },
    mainSliderModal: {
        spaceBetween: 10,
        slidesPerView: 4,
    },
    support: {
        slidesPerView: 1.3,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 2.3,
            },
            900: {
                slidesPerView: 3,
            }
        }
    }
}

export const sliderSwiper = (sliderOption) => ({
    slider: null,
    thumbsSlider: null,

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.initThumbsSlider();
            this.initMainSlider();
        });
    },

    initThumbsSlider() {
        if (sliderOption === 'mainSlider') {
            this.thumbsSlider = new Swiper('.swiper-container-thumbs', sliderOptions.mainSliderModal);
        }
    },

    initMainSlider() {
        if (sliderOption === 'mainSlider') {
            sliderOptions.mainSlider.thumbs.swiper = this.thumbsSlider;
        }

        this.slider = new Swiper(this.$el, sliderOptions[sliderOption]);
    },
});

document.addEventListener('DOMContentLoaded', () => {
    Alpine.data('sliderSwiper', sliderSwiper);
});
