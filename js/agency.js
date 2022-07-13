import '../style.scss'
import '../agency.scss'
import '../swiper-bundle.min';
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";


var options = {
    strings: ['business','team','startUp'],
    typeSpeed: 50,
    loop: true,
    cursorChar: '<span class="text-warning">|</span>',
};

let typing= new Typed('.home-type', options);



/// >>>>> Scrollreveal <<<<<<///

let slideDown = {
    distance: '50px',
    origin: 'top',
    duration : 900,
    interval : 300,
    easing: "ease-in",

};

let slidUp={
    distance: '90px',
    origin: 'bottom',
    duration : 1000,
    easing: "ease-out",


}

let upInterval={
    distance: '20px',
    origin: 'bottom',
    duration : 900,
    interval: 200,
    easing: "ease-out",

}

let taskUp={
    distance: '70px',
    origin: 'bottom',
    duration : 1000,
    easing: "ease-out",
    interval: 300,


}


let ratingUp={
    distance: '90px',
    origin: 'bottom',
    duration : 900,
    easing: "ease-out",
    interval:300,


}

let slideRight={
    distance: '160px',
    origin: 'left',
    duration : 1000,
    easing: "ease-out",


}

let slideLeft={
    distance: '30px',
    origin: 'right',
    duration : 1000,
    easing: "ease-out",




}

let navDown={

    distance: '70px',
    origin: 'top',
    duration : 900,
    interval : 500,
    easing: "ease-out",

}
let listDown={
    distance: '30px',
    origin: 'top',
    duration : 800,
    easing: "ease-in",
    interval: 100,
}

ScrollReveal().reveal('.navDown', navDown);
ScrollReveal().reveal('.up',slidUp);
ScrollReveal().reveal('.ratingUp',ratingUp)
ScrollReveal().reveal('.down',slideDown);
ScrollReveal().reveal('.left',slideLeft);
ScrollReveal().reveal('.right',slideRight)
ScrollReveal().reveal('.task-up',taskUp)
ScrollReveal().reveal('.upInterval',upInterval)
ScrollReveal().reveal('.listDown',listDown)


// swiper////////// Swiper
var menu= ['Discover how to build and maintain coding systems using our documentation.', 'Start browsing our snippets pages with copy-to-clipboard snippets to match Bootstrap\'s level of quality.','Apart from 70+ HTML-pages, the theme comes with 3 ready-to-use and stand-alone demo options.\n']
var swiper = new Swiper(".mySwiper", {

    initialSlide:2,
    touchRatio:0,
    autoplay:{
        delay: 5000,
        disableOnInteraction: false
    },
    autoplayDisableOnInteraction: false,
    effect: 'fade',
    speed: 1000,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className){
            return '<span class="'+ className +'">'+ menu[index] +'</span>'
        }
    },


    breakpoints: {

        // when window width is >= 480px
        414: {
            slidesPerView: 1,
            spaceBetween: 30,
            dynamicMainBullets: 1
        },

    }
});
