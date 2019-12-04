const collapsible = document.getElementsByClassName("aboutCollapsibles");

for (let i = 0; i < collapsible.length; i++) {
    collapsible[i].addEventListener("click", function () {
        this.classList.toggle("activeCollapsibles");
        this.nextElementSibling.classList.toggle("openCollapsibles");
        this.firstChild.nextElementSibling.classList.toggle('opened')
        console.log(this.nextElementSibling.classList)


        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";

        }
    });
}

const icon = document.querySelector('.collapseIcon')


// icon.addEventListener('click', function () {
//     console.log(this)
//     this.classList.toggle('opened')
//     // iconVertical.classList.toggle('opened')
// })

// console.log(icon)

// icon.onclick = function () {
//     console.log(this)
//     this.classList.toggle('opened')
//     // iconVertical.classList.toggle('opened')
// }