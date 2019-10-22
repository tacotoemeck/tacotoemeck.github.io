const burgerIcon = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksHidden = document.getElementsByClassName('hiddenNav') + 5;
const landingSection = document.querySelector('.landing');

const navLinksClientWidth = navLinks.clientWidth;

navLinks.style.marginRight = `-${navLinksClientWidth}` + `px`;
const navHiddenMargin = navLinks.style.marginRight;

let menuShowing = false;


burgerIcon.addEventListener('click', openNavBar);

function openNavBar() {
    if ( menuShowing ==  false ) {
    navLinks.style.marginRight = `35px`;
    
    burgerIcon.classList.add('toggle');
    menuShowing = true;
    }
    else {
    navLinks.style.marginRight = navHiddenMargin; 
    burgerIcon.classList.remove('toggle');
    
    menuShowing = false;
    }
}