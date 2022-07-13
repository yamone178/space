import '../style.scss'
import '../services.scss'

import Typed from 'typed.js';
import ScrollReveal from "scrollreveal";


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

