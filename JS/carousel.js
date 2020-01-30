
// closed loop image slider by TomW, built as a part of Founders and Coders application

const carousel = document.querySelector('.carousel')

// ====================insert image url here content here: ===================================================== //

const sliderContent = [

    {
        displayImage: "thumbs/calculator.jpg",
        viewLink: "https://codepen.io/tacotomek/pen/MWWdBdx",
        github: "https://github.com/tacotoemeck/JS-Projects/tree/master/calculator%20vanilla%20js",
        projectInfo: "Vanilla JavaScript calculator built as a part of FreeCodeCamp ciriculum. Use of CSS Grid. Math function uses recursive function in order to add a formula string in a correct order"
    },
    {
        displayImage: "thumbs/ive.jpg",
        viewLink: "https://polar-lake-04436.herokuapp.com/",
        github: "https://github.com/tacotoemeck/iVeStock",
        projectInfo: "Full Stack web application. Built in Node & Express, using MongoDB with Mongoose Schemas. Depoled on Heroku. Allows small restaurants to have an easier control of their daily stock takes"
    },
    {
        displayImage: "thumbs/journalEntry.jpg",
        viewLink: "https://codepen.io/tacotomek/pen/gOOewrZ",
        github: "https://github.com/tacotoemeck/CodeStudyTracker",
        projectInfo: "Project built as a practice on DOM manipulation and local storage built in Vanilla JavaScript. It combines a todo list with a timer and then logs the results which can be copied into a clipboard."
    },
    {
        displayImage: "thumbs/drumMachine.jpg",
        viewLink: "https://codepen.io/tacotomek/pen/gOOewrZ",
        github: "https://github.com/tacotoemeck/JS-Projects/tree/master/drum%20machine%20js",
        projectInfo: "'Drum machine' project built as a part of a FreeCodeCamp ciriculum. User can play sounds by clicking on various elements. Built in Vanilla JavaScript"
    },
    {
        displayImage: "thumbs/generator.jpg",
        viewLink: "https://codepen.io/tacotomek/pen/MWWxwvX",
        github: "https://github.com/tacotoemeck/JS-Projects/tree/master/Random%20quite%20machine%20JS",
        projectInfo: "Random quote generator built as a part of a FreeCodeCamp ciriculum. It uses an API to generate new quotes. Made with Vanilla JavaScript and Bootstrap used for styling"
    },
    {
        displayImage: "thumbs/markdown.jpg",
        viewLink: "https://codepen.io/tacotomek/pen/Vwwqqqo",
        github: "https://github.com/tacotoemeck/JS-Projects/tree/master/Markdown%20Previewer%20JS",
        projectInfo: "Markdown previewer built as a part of a FreeCodeCamp ciriculum. Made in Vanilla JavaScript with a use of marked.js and highlight.js libraries"
    },
    {
        displayImage: "thumbs/pom.jpg",
        viewLink: "https://codepen.io/tacotomek/pen/ZEELBgV",
        github: "https://github.com/tacotoemeck/Pomodoro-Clock-Beta",
        projectInfo: "Pomodoro Timer built as my first fully functional application. Althought built very early into my learning it has a complex functionality including sounds and settings. Made in Vanilla JavaScript"
    },
    {
        displayImage: "thumbs/maria.jpg",
        viewLink: "http://mariasabina.co.uk/info/",
        github: "https://github.com/tacotoemeck/websites",
        projectInfo: "Website for a street food business Maria Sabina. It uses Google Maps API, CSS Grid, Flexbox, parallax scrolling and Google Analytics. Functionality built with Vanilla JavaScript"
    },
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
    li.innerHTML = `
    <img src=${sliderContent[i].displayImage} class="sliderImages">
    <div class="sliderPortfolioLinks">
    <span>
    <a href="${sliderContent[i].viewLink}" alt="SEE IN ACTION"><i class="far fa-eye"></i><p>VIEW</p></a>
    </span>
    <span>
    <a href="${sliderContent[i].github}" alt="VIEW CODE"><i class="fab fa-github"></i><p>CODE</p></a>
    </span>
    </div>
    <div class="sliderProjectInfo">
    <p>
    ${sliderContent[i].projectInfo}
    </p>
    </div>`;
    li.classList.add('sliderLi');
    li.dataset.index = `${i}`
    ol.appendChild(li);
}

for (let i = 0; i < sliderContent.length; i++) {
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
    // li.innerHTML = `<img src=${sliderContent[currentIndex].displayImage}></img>`;
    li.innerHTML = `
    <img src=${sliderContent[currentIndex].displayImage} class="sliderImages">
    <div class="sliderPortfolioLinks">
    <span>
    <a href="${sliderContent[currentIndex].viewLink}" alt="SEE IN ACTION"><i class="far fa-eye"></i><p>VIEW</p></a>
    </span>
    <span>
    <a href="${sliderContent[currentIndex].github}" alt="VIEW CODE"><i class="fab fa-github"></i><p>CODE</p></a>
    </span>
    </div>
    <div class="sliderProjectInfo">
    <p>
    ${sliderContent[currentIndex].projectInfo}
    </p>
    </div>`;
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

// display overlay on hover


// 

