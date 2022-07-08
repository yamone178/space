import '../style.scss'
import '../services.scss'

import Typed from 'typed.js';


var options = {
    strings: ['business','startup','success'],
    typeSpeed: 50,
    loop: true,
    cursorChar: '<span class="text-warning">|</span>',
};

let typing= new Typed('.service-type', options);
