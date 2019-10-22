const skillsSection =  document.querySelector('.skillsBox')


function loadSkillBars() {
    let current = 0;
let interval = 30;

    let progressBars = document.querySelectorAll('.progress-bar');
    let values = [
        '80%',
        '60%',
        '50%',
        '10%'
    ];
    let colors = [
        '#f674a4',
        '#f0bb4b',
        '#a1ce5b',
        '#66b3cc'
    ]

if ( window.pageYOffset > skillsSection.offsetTop -200 &&  window.pageYOffset < skillsSection.offsetTop + 600  ) {


    progressBars.forEach((progress, index) => {
        progress.style.width = values[index];
        progress.style.backgroundColor = `${colors[index]}`
        setInterval(function add() {
            if ( current < parseInt(values[index])) {
            current++;
            progress.innerHTML = `<span>${current}%`
            }
            } ,interval)
    });

    }
else {
    progressBars.forEach((progress, index) => {
        progress.style.width = '0%';
        progress.style.backgroundColor = `0`;
        progress.innerHTML = "0"
       
    });  
}
};
window.addEventListener('scroll', loadSkillBars);

loadSkillBars()
// 
