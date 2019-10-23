

let i = 0;

for ( let li of portfolioCarousel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
};

// configuration 

let width = 316;
let count = 1;

let list = portfolioCarousel.querySelector('ul');
let listElems = portfolioCarousel.querySelectorAll('li');

let position = 0; 

portfolioCarousel.querySelector('.prev').onclick = function() {
    //shift left 
    position += width * count;
    position = Math.min(position, 0); 
    list.style.marginLeft = position + 'px';
};
    portfolioCarousel.querySelector('.next').onclick = function() {
    // shift right
    position -= width * count;
    // can only shift the ribbbon for (total ribbon length - visible count) images
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};
