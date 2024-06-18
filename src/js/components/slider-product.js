// x-ref="main-slider-modal-js"
import Swiper, { EffectFade, Navigation, Thumbs } from "swiper";
Swiper.use([Thumbs, Navigation, EffectFade]);

export const sliderProduct = () => ({
    mainSlider: null,
    idSlide: null,
    mainSliderModal: null,
    supportSlider: null,
    init() {
        this.initSliders();
    },
    initSliders() {
        const _this = this;

        this.mainSlider = new Swiper(this.$refs["main-slider-desk-js"], {
            slidesPerView: 5,
            spaceBetween: 25,
            observer: true,
        });

        this.mainSliderModal = new Swiper(this.$refs["main-slider-modal-js"], {
            slidesPerView: 1,
            spaceBetween: 20,
            observer: true,
        });

        this.supportSlider = new Swiper(this.$refs["support-slider-js"], {
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
        });
    },
});
