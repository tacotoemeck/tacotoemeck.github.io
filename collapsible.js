const collapsible = document.getElementsByClassName("aboutCollapsibles");

for (let i = 0; i < collapsible.length; i++) {
    collapsible[i].addEventListener("click", function () {
        this.classList.toggle("activeCollapsibles");
        this.nextElementSibling.classList.toggle("openCollapsibles");
        this.firstChild.nextElementSibling.classList.toggle('opened')
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";

        }
    });
}

const icon = document.querySelector('.collapseIcon')


