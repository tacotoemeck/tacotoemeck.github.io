
const navLinks = document.querySelector('.nav-links');

const navLinksClientWidth = navLinks.clientWidth;

navLinks.style.marginRight = `-${navLinksClientWidth}` + `px`;
const navHiddenMargin = navLinks.style.marginRight;

let menuShowing = false;

burger.addEventListener('click', openNavBar);

function openNavBar() {
    if (menuShowing === false) {
        navLinks.style.marginRight = `35px`;

        burger.classList.add('toggle')
        menuShowing = true
    }
    else {
        navLinks.style.marginRight = navHiddenMargin;
        burger.classList.remove('toggle');

        menuShowing = false
    }
}
