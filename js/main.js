import '../style.scss';
import '../swiper-bundle.min';
import ScrollReveal from "scrollreveal";
import counterUp from 'counterup2'
import "waypoints/lib/noframework.waypoints"
import Typed from 'typed.js';

import * as bootstrap from 'bootstrap';


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




//typed js ////////


// var options = {
//     strings: ['business','startup','success'],
//     typeSpeed: 50,
//     loop: true,
//     cursorChar: '<span class="text-warning">|</span>',
// };
//
// let typing= new Typed('.home-type', options);


//scrollreveal


let slideDown = {
    distance: '50px',
    origin: 'top',
    duration : 900,
    interval : 300,
    easing: "ease-in",
};

let slidUp={
    distance: '70px',
    origin: 'bottom',
    duration : 1000,
    easing: "ease-out",
    cleanup: true,

}

let upInterval={
    distance: '20px',
    origin: 'bottom',
    duration : 900,
    interval: 200,
    easing: "ease-out",
    cleanup: true,
}

let taskUp={
    distance: '70px',
    origin: 'bottom',
    duration : 1000,
    easing: "ease-out",
    interval: 300,
    cleanup: true,

}
let tableTextDown={
    distance: '20px',
    origin: 'top',
    duration : 500,
    easing: "ease-in",
    interval: 80,
    delay: 100
}

let ratingUp={
    distance: '90px',
    origin: 'bottom',
    duration : 900,
    easing: "ease-out",
    interval:300,
    cleanup: true,

}

let slideRight={
    distance: '160px',
    origin: 'left',
    duration : 1000,
    easing: "ease-out",
    cleanup: true

}

let slideLeft={
    distance: '30px',
    origin: 'right',
    duration : 1000,
    easing: "ease-out",
    cleanup: true



}

let navDown={

    distance: '70px',
    origin: 'top',
    duration : 900,
    interval : 500,
    easing: "ease-out",
    cleanup: true,

}


let heroUps= document.querySelectorAll('.up')
let ratingUps= document.querySelectorAll('.ratingUp')
let down= document.querySelectorAll('.down');
let left= document.querySelectorAll('.right');
let right= document.querySelectorAll('.left');
let taskUps= document.querySelectorAll('.task-up')
let textUps= document.querySelectorAll('.text-up')

ScrollReveal().reveal('.navDown', navDown);
ScrollReveal().reveal(heroUps,slidUp);
ScrollReveal().reveal(ratingUps,ratingUp)
ScrollReveal().reveal(down,slideDown);
ScrollReveal().reveal(left,slideLeft);
ScrollReveal().reveal(right,slideRight)
ScrollReveal().reveal(taskUps,taskUp)
ScrollReveal().reveal(textUps,tableTextDown)
ScrollReveal().reveal('.upInterval',upInterval)


let btn_arrow_up= document.querySelector('.btn-arrow-up')
window.addEventListener('scroll',function (){

   if(this.scrollY > 790) {
       btn_arrow_up.classList.remove('animate__fadeOutUp')
       btn_arrow_up.classList.remove('d-none')
       btn_arrow_up.classList.add('d-block')
       btn_arrow_up.classList.add('animate__fadeInDown')
   }else {
       btn_arrow_up.classList.remove('animate__fadeInDown')
       btn_arrow_up.classList.add('animate__fadeOutUp')


   }


})



const els = document.querySelectorAll( '.counter' )

// Start counting, do this on DOM ready or with Waypoints.

const counters = document.querySelectorAll( '.counter' )

counters.forEach((count)=>{
    return new Waypoint( {
        element: count,
        handler: function() {
            counterUp( count, {
                duration : 1500,
                delay: 20
            } )
            this.destroy()
        },
        offset: 'bottom-in-view',
    } )

})




