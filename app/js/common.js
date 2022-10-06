// (function dropDown(){
//     let openDrop = document.querySelector(".header-dropdown__open")
//     function DropDown() {
//         document.querySelector(".header-dropdown").classList.toggle("header-dropdown__show");
//         openDrop.classList.toggle("header-dropdown__active");
//     }
//     openDrop.addEventListener('click',DropDown);
//
//     window.onclick = function(event) {
//         if (!event.target.matches('.header-dropdown__open')) {
//             let dropdowns = document.getElementsByClassName("header-dropdown");
//             for (let i = 0; i < dropdowns.length; i++) {
//                 let openDropdown = dropdowns[i];
//                 if (openDropdown.classList.contains('header-dropdown__show')) {
//                     openDropdown.classList.remove('header-dropdown__show');
//                     openDrop.classList.remove("header-dropdown__active");
//
//                 }
//             }
//         }
//     }
// })();


(function addSlider(){
    const sliderBlog = document.querySelector(".blog__list")

    if (window.innerWidth <= 666) {
        sliderBlog.classList.add('slider__blog');
    } else {
        sliderBlog.classList.remove('slider__blog');
    }
})();

$(document).ready(function(){
    $('.slider__blog').slick({
        dots: true,
    });
})
$(document).ready(function(){
    $('.clients__review-slider').slick({
    });
})




document.querySelector('.header-checkbox').addEventListener('change', function(e) {
    document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
});










//
// let slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
//
// // const prev = document.querySelector(".prev");
// // const next = document.querySelector(".next");
// // prev.addEventListener("click", plusSlides.bind(1));
// // next.addEventListener("click", plusSlides.bind(-1));
//
// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("clients__review-item");
//     // let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex-1].style.display = "block";
// }





function OpenWin() {
    "use strict";

    const backdrop = document.querySelector('.modal-back ');
    document.addEventListener('click', modalHandler);

    function modalHandler(evt) {
        const modalBtnOpen = evt.target.closest('.signin-button');
        if (modalBtnOpen) { // open btn click
            const modalSelector = modalBtnOpen.dataset.modal;
            showModal(document.querySelector(modalSelector));
        }

        const modalBtnClose = evt.target.closest('.modal-close');
        if (modalBtnClose) { // close btn click
            evt.preventDefault();
            hideModal(modalBtnClose.closest('.modal'));
            console.log('ssss')
        }

        if (evt.target.matches('#modal-back')) { // backdrop click
            hideModal(document.querySelector('.modal.show'));
        }
    }

    function showModal(modalElem) {
        modalElem.classList.add('show');
        backdrop.classList.remove('modal-hidden');
        // document.body.style.overflow = 'hidden' ;
    }

    function hideModal(modalElem) {
        modalElem.classList.remove('show');
        backdrop.classList.add('modal-hidden');
        // document.body.style.overflow = 'auto' ;
    }
    let form = document.querySelector(".signin-form");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);
};


    $("signin-form").validate({
        rules:{
            email:{
                required:true,
                email: true,
            }
        }
    });

$(document).ready(function(){

    $("#signin-form").submit(function(e) {
        e.preventDefault();
        if ($(this).valid()) {
            e.preventDefault();
            OpenWin();
        } else {
            console.log("nooo")
            // do error stuff here
        }
    });
})



