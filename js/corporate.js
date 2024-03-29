import '../style.scss'
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
    strings: ['business','team','startUp'],
    typeSpeed: 50,
    loop: true,
    cursorChar: '<span class="text-warning">|</span>',
};

let typing= new Typed('.home-type', options);



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
let tableTextDown={
    distance: '20px',
    origin: 'top',
    duration : 500,
    easing: "ease-in",
    interval: 80,
    delay: 100,


}

let ratingUp={
    distance: '90px',
    origin: 'bottom',
    duration : 900,
    easing: "ease-out",
    interval:300,


}

let slideRight={
    distance: '90px',
    origin: 'left',
    duration : 1000,
    easing: "ease-out",


}

let slideLeft={
    distance: '90px',
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
ScrollReveal().reveal('.listDown',listDown)

