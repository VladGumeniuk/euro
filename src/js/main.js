import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse'
import {mobileMenu} from './store/mobile-menu';
import {stopScroll} from './store/stop-scroll';
import {sliderProduct} from './components/slider-product';




document.addEventListener('alpine:init', () => {
    Alpine.plugin(collapse);

    Alpine.data("sliderProduct", sliderProduct);

    Alpine.store("mobileMenu", mobileMenu);
    Alpine.store("stopScroll", stopScroll);
});


window.Alpine = Alpine

Alpine.start();
