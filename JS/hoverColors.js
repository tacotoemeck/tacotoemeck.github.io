let colors = [
    '#f674a4',
    '#f0bb4b',
    '#a1ce5b',
    '#66b3cc',
    '#f674a4'
];

let linksNav = document.querySelectorAll('.nav-As')
let linksSection = document.querySelectorAll('.footerLinks');

addColors(linksSection);
addColors(linksNav);



function addColors(section) {
section.forEach((link, index) => {
    link.addEventListener('mouseover', function() {
        link.style.color = `${colors[index]}`;
       
        
    });
    link.addEventListener('mouseout', function() {
        link.style.color = 'white';
    });
});
};








