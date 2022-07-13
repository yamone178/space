import '../style.scss'
import Typed from 'typed.js';
import ScrollReveal from "scrollreveal";


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
    reset :true
};

let slidUp={
    distance: '70px',
    origin: 'bottom',
    duration : 1000,
    easing: "ease-out",
    cleanup: true,
    reset: true

}

let upInterval={
    distance: '20px',
    origin: 'bottom',
    duration : 900,
    interval: 200,
    easing: "ease-out",
    cleanup: true,
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
    cleanup: true,
    reset: true

}

let slideRight={
    distance: '90px',
    origin: 'left',
    duration : 1000,
    easing: "ease-out",
    cleanup: true,
    reset: true

}

let slideLeft={
    distance: '90px',
    origin: 'right',
    duration : 1000,
    easing: "ease-out",
    cleanup: true,
    reset: true

}

let navDown={

    distance: '70px',
    origin: 'top',
    duration : 900,
    interval : 500,
    easing: "ease-out",
    cleanup: true,

}
let listDown={
    distance: '30px',
    origin: 'top',
    duration : 800,
    easing: "ease-in",
    interval: 100,
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
ScrollReveal().reveal('.listDown',listDown)

