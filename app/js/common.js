(function dropDown(){
    let openDrop = document.querySelector(".header-dropdown__open")
    function DropDown() {
        document.querySelector(".header-dropdown").classList.toggle("header-dropdown__show");
        openDrop.classList.toggle("header-dropdown__active");
    }
    openDrop.addEventListener('click',DropDown);

    window.onclick = function(event) {
        if (!event.target.matches('.header-dropdown__open')) {
            let dropdowns = document.getElementsByClassName("header-dropdown");
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('header-dropdown__show')) {
                    openDropdown.classList.remove('header-dropdown__show');
                    openDrop.classList.remove("header-dropdown__active");

                }
            }
        }
    }
})();


(function addSlider(){
    const sliderBlog = document.querySelector(".blog-list")
    if (window.innerWidth <= 768) {
        sliderBlog.classList.add('single-item');
    } else {
        sliderBlog.classList.remove('single-item');
    }
})();




// function openModal(){
//     const modal = document.querySelector(".modal");
//     const trigger = document.querySelector(".trigger");
//     const closeButton = document.querySelector(".close-button");
//
//     function toggleModal() {
//         modal.classList.toggle("show-modal");
//     }
//     function windowOnClick(event) {
//         if (event.target === modal) {
//             toggleModal();
//         }
//         console.log('ssss')
//     }
//     let form = document.querySelector(".signin-form");
//     function handleForm(event) { event.preventDefault(); }
//     form.addEventListener('submit', handleForm);
//     trigger.addEventListener("click", toggleModal);
//     closeButton.addEventListener("click", toggleModal);
//     window.addEventListener("click", windowOnClick);
// };
// openModal()

document.querySelector('.header-checkbox').addEventListener('change', function(e) {
    document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
});


$(document).ready(function(){
    $('.single-item').slick({
        dots: true,
    });
})








let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");
// prev.addEventListener("click", plusSlides.bind(1));
// next.addEventListener("click", plusSlides.bind(-1));

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("clients-review__item");
    // let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


