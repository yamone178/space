import '../scss/style.scss'
import '../scss/agency.scss'


import Typed from 'typed.js';


var options = {
    strings: ['business','startup','success'],
    typeSpeed: 50,
    loop: true,
    cursorChar: '<span class="text-warning">|</span>',
};

let typing= new Typed('.agency-type', options);
