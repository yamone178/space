import '../consulting.scss'


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