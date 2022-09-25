



/// scroll top
let up = function () {
    let btnTop = document.querySelector('.scroll-top');
    let btnVisible = function () {
        if (window.scrollY >= 500) {
            btnTop.classList.add('scroll-visible');
        } else {
            btnTop.classList.remove('scroll-visible');
        }
    };
    let topscroll = function () {
        if(window.scrollY!=0) {
            setTimeout(function() {
                window.scrollTo(0,window.scrollY-100);
                topscroll();
            }, 10);
        }
    };
    window.addEventListener('scroll', btnVisible);
    btnTop.addEventListener('click', topscroll);
};
up();




// accordion

let acc = document.querySelectorAll(".cv-title");
console.log(acc.length)
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        console.log(this.previousElementSibling)
        console.log(acc)
        let textHide = this.nextElementSibling;
        let button = this.previousElementSibling;
        textHide.classList.toggle('cv-info-hide')
        button.classList.toggle('cv-toggle-close')
    });
}








