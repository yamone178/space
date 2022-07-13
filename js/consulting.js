import '../consulting.scss'
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";


let consultNav= document.querySelector('.consulting-nav');
window.addEventListener('scroll',function (){
    if (this.scrollY >620){
        consultNav.classList.remove('position-absolute')
        consultNav.classList.add('position-fixed')
        consultNav.classList.add('bg-primary-dark')
        consultNav.classList.add('animate__fadeInDown')
    }
    else {
        consultNav.classList.remove('position-fixed')
        consultNav.classList.add('position-absolute')
        consultNav.classList.remove('bg-primary-dark')

    }
})

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
    cleanup: true,

}
let up={
    distance: '50px',
    origin: 'bottom',
    duration : 900,
    interval: 200,
    easing: "ease-out",
    cleanup: true,
    reset: true
}

let titleDown={
    distance: '30px',
    origin: 'top',
    duration : 900,
    interval : 300,
    easing: "ease-in",
    reset: true
}

let taskUp={
    distance: '70px',
    origin: 'bottom',
    duration : 1000,
    easing: "ease-out",
    interval: 300,
    cleanup: true,
    reset: true

}

let taskDown={
    distance: '30px',
    origin: 'bottom',
    duration : 1000,
    easing: "ease-out",
    interval: 300,
    cleanup: true,
    reset: true
}
let slideRight={
    distance: '70px',
    origin: 'left',
    duration : 1000,
    easing: "ease-out",
    cleanup: true,
    reset: true

}

let slideLeft={
    distance: '70px',
    origin: 'right',
    duration : 1000,
    easing: "ease-out",
    cleanup: true,
    reset: true

}
let listDown={
    distance: '30px',
    origin: 'top',
    duration : 800,
    easing: "ease-in",
    interval: 100,
    cleanup: true,
}
ScrollReveal().reveal('.consulting-nav',navDown)
ScrollReveal().reveal('.up',up)
ScrollReveal().reveal('.task-up',taskUp)
ScrollReveal().reveal('.titleDown',titleDown)
ScrollReveal().reveal('.taskDown',taskDown)
ScrollReveal().reveal('.slideLeft',slideLeft)
ScrollReveal().reveal('.slideRight',slideRight)
ScrollReveal().reveal('.listDown',listDown)


