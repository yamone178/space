import '../style.scss';
import '../swiper-bundle.min';

import counterUp from 'counterup2'
import "waypoints/lib/noframework.waypoints"


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




