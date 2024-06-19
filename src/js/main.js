import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse'
import {mobileMenu} from './store/mobile-menu';
import {stopScroll} from './store/stop-scroll';
import {sliderSwiper} from './components/swiper-slider';
import {submitForm} from './components/submit-form';




document.addEventListener('alpine:init', () => {
    Alpine.plugin(collapse);

    Alpine.data("sliderSwiper", sliderSwiper);
    Alpine.data("submitForm", submitForm);

    Alpine.store("mobileMenu", mobileMenu);
    Alpine.store("stopScroll", stopScroll);
});


window.Alpine = Alpine

Alpine.start();
