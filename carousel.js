

// closed loop image slider by TomW, built as a part of Founders and Coders application

const carousel = document.querySelector('.carousel')

// ====================insert image url here content here: ===================================================== //


const content = [
    "thumbs/calculator.jpg",
    "thumbs/journalEntry.jpg",
    "thumbs/drumMachine.jpg",
    "thumbs/generator.jpg",
    "thumbs/markdown.jpg",
    "thumbs/pom.jpg",
    "thumbs/maria.jpg"
]

const contentLinks = [
    "https://codepen.io/tacotomek/pen/MWWdBdx",
    "https://codepen.io/tacotomek/pen/gOOewrZ",
    "https://codepen.io/tacotomek/pen/MWWxwvX",
    "https://codepen.io/tacotomek/pen/mddaOqw",
    "https://codepen.io/tacotomek/pen/Vwwqqqo",
    "https://codepen.io/tacotomek/pen/ZEELBgV",
    "http://mariasabina.co.uk/info/"

]

// ====================insert image url above, make sure they are comma seperated : ===================================================== //


let auto;

// dom insert list
const ol = document.createElement('ol');
ol.classList.add('carouselElemenList')
carousel.appendChild(ol);

// images into the list

function appendImagesIntoAList(i, insertLocation) {
    let li = document.createElement('li');
    li.innerHTML = `<a href="${contentLinks[i]}"><img src=${content[i]}></img></a>`;
    li.classList.add('sliderLi');
    li.dataset.index = `${i}`
    ol.appendChild(li);
}

for (let i = 0; i < content.length; i++) {
    appendImagesIntoAList(i)
};

// navigation functions :

// get carousel div size:
const carouselWidth = carousel.offsetWidth;
// const rightMargin = 0;
const leftMargin = -carouselWidth;

let imageGallery = document.querySelector('.sliderLi');
imageGallery.style.marginLeft = `${leftMargin}` + 'px';

navButtonRightCarousel.addEventListener('click', nextImage)
navButtonLeftCarousel.addEventListener('click', previousImage);


function nextImage(e) {

    let firstLi = document.querySelector('.sliderLi');
    let currentIndex = firstLi.dataset.index;
    ol.removeChild(firstLi);
    imageGallery = document.querySelector('.sliderLi');
    imageGallery.style.marginLeft = `${leftMargin}` + 'px';
    appendImagesIntoAList(currentIndex);

}

function previousImage(e) {

    let lastLi = ol.lastChild;
    let currentIndex = lastLi.dataset.index;
    ol.removeChild(lastLi);
    imageGallery = document.querySelector('.sliderLi');
    let li = document.createElement('li');
    li.innerHTML = `<img src=${content[currentIndex]}></img>`;
    li.classList.add('sliderLi');
    li.dataset.index = `${currentIndex}`
    ol.insertBefore(li, ol.firstChild);
    imageGallery.style.marginLeft = '';
    li.style.marginLeft = `${-carouselWidth}` + 'px';
}

// play and pause functions
play.addEventListener('click', function () {
    autoPlay();
    play.style.display = 'none';
    pause.style.display = 'block';
})

pause.addEventListener('click', function () {
    pausePlay();
    pause.style.display = 'none';
    play.style.display = 'block';
})

function autoPlay() {
    auto = setInterval(nextImage, 2500)
}

function pausePlay() {
    clearInterval(auto)
}

// display play OR pause button

function autopPlayControlsDisplay() {

}


// switch images using arrow keys

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        previousImage()

    }
    else if (e.keyCode == '39') {
        nextImage()
    }

}

