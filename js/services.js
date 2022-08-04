import '../style.scss'
import '../services.scss'

import Typed from 'typed.js';
import ScrollReveal from "scrollreveal";

import counterUp from 'counterup2'
import "waypoints/lib/noframework.waypoints"
import * as bootstrap from 'bootstrap';

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

let ScrolltoTop=()=>{
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}

btn_arrow_up.addEventListener('click',ScrolltoTop)



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



var options = {
    strings: ['technology','startup','success'],
    typeSpeed: 50,
    loop: true,
    cursorChar: '<span class="text-warning">|</span>',
};

let typing= new Typed('.service-type', options);



/// >>>>> Scrollreveal <<<<<<///

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

