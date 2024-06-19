import Swiper, {Navigation, Thumbs} from 'swiper';

Swiper.use([Thumbs , Navigation]);

const sliderOptions = {
    mainSlider: {
        slidesPerView: 1,
        autoHeight: true,
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

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.initSwiper();
        });
    },

    initSwiper() {
        this.slider = new Swiper(this.$el, sliderOptions[sliderOption]);
    },
});