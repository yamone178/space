import '../style.scss';
import '../consulting.scss'
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";


import counterUp from 'counterup2'
import "../node_modules/waypoints/lib/noframework.waypoints"
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

let countingSection=document.querySelector('.countingSection');
let consultNav= document.querySelector('.consulting-nav');

let navWayPoint = new Waypoint({
    element: countingSection,
    handler: function(direction) {
        if(direction === "down"){
            console.log("about section appear")


            consultNav.classList.add('animate__animated')
            consultNav.classList.add('animate__fadeInDown')

            consultNav.classList.toggle("showNavbar")
            consultNav.classList.toggle("bg-primary-dark")



        }else{
            console.log("about section leave")
            consultNav.classList.remove('animate__animated')
            consultNav.classList.remove('animate__fadeInDown')
            consultNav.classList.toggle("showNavbar")
            consultNav.classList.toggle("bg-primary-dark")

        }
    },
    offset: "0%"
})

// window.addEventListener('scroll',function (){
//     if (this.scrollY >620){
//         consultNav.classList.add('showNavbar')
//         // consultNav.classList.remove('position-absolute')
//         // consultNav.classList.add('position-fixed')
//         // consultNav.classList.add('showNav')
//         consultNav.classList.add('bg-primary-dark')
//
//     }
//     else {
//         consultNav.classList.remove('showNavbar')
//         // consultNav.classList.add('position-absolute')
//         consultNav.classList.remove('bg-primary-dark')
//
//     }
// })

// type js
var options = {
    strings: ['business','team','startUp'],
    typeSpeed: 50,
    loop: true,
    cursorChar: '<span class="text-warning">|</span>',
};

let typing= new Typed('.home-type', options);

// end type js

let navDown={

    distance: '70px',
    origin: 'top',
    duration : 900,
    interval : 500,
    easing: "ease-out",

}
let up={
    distance: '50px',
    origin: 'bottom',
    duration : 900,
    interval: 200,
    easing: "ease-out",

}

let titleDown={
    distance: '30px',
    origin: 'top',
    duration : 900,
    interval : 300,
    easing: "ease-in",

}

let taskUp={
    distance: '70px',
    origin: 'bottom',
    duration : 1000,
    easing: "ease-out",
    interval: 300,


}

let taskDown={
    distance: '30px',
    origin: 'bottom',
    duration : 1000,
    easing: "ease-out",
    interval: 300,

}
let slideRight={
    distance: '70px',
    origin: 'left',
    duration : 1000,
    easing: "ease-out",


}

let slideLeft={
    distance: '70px',
    origin: 'right',
    duration : 1000,
    easing: "ease-out",


}
let listDown={
    distance: '30px',
    origin: 'top',
    duration : 800,
    easing: "ease-in",
    interval: 100,
}
let showNav={
    distance: '70px',
    origin: 'top',
    duration : 1000,
    easing: "ease-in",
    reset: true
}
ScrollReveal().reveal('.consulting-nav',navDown)
ScrollReveal().reveal('.up',up)
ScrollReveal().reveal('.task-up',taskUp)
ScrollReveal().reveal('.titleDown',titleDown)
ScrollReveal().reveal('.taskDown',taskDown)
ScrollReveal().reveal('.slideLeft',slideLeft)
ScrollReveal().reveal('.slideRight',slideRight)
ScrollReveal().reveal('.listDown',listDown)
ScrollReveal().reveal('.showNav',showNav)


