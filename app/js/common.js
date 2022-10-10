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





// function OpenWin() {
//     "use strict";
//
//     const backdrop = document.querySelector('.modal-back ');
//     document.addEventListener('click', modalHandler);
//
//     function modalHandler(evt) {
//         const modalBtnOpen = evt.target.closest('.signin-button');
//         if (modalBtnOpen) { // open btn click
//             const modalSelector = modalBtnOpen.dataset.modal;
//             showModal(document.querySelector(modalSelector));
//         }
//
//         const modalBtnClose = evt.target.closest('.modal-close');
//         if (modalBtnClose) { // close btn click
//             evt.preventDefault();
//             hideModal(modalBtnClose.closest('.modal'));
//             console.log('ssss')
//         }
//
//         if (evt.target.matches('#modal-back')) { // backdrop click
//             hideModal(document.querySelector('.modal.show'));
//         }
//     }
//
//     function showModal(modalElem) {
//         modalElem.classList.add('show');
//         backdrop.classList.remove('modal-hidden');
//         // document.body.style.overflow = 'hidden' ;
//     }
//
//     function hideModal(modalElem) {
//         modalElem.classList.remove('show');
//         backdrop.classList.add('modal-hidden');
//         // document.body.style.overflow = 'auto' ;
//     }
//     let form = document.querySelector(".signin-form");
//     function handleForm(event) { event.preventDefault(); }
//     form.addEventListener('submit', handleForm);
// };


// $(document).ready(function () {
//     // initializing
//     $('#btn').click(function(){
//         $('.fancybox').open({
//             src: '#modal',
//             type: 'inline'
//         });
//     });
//     $('.fancybox').fancybox({
//         maxWidth: 800,
//         maxHeight: 600,
//         fitToView: false,
//         width: '70%',
//         height: '90%',
//         autoSize: false,
//         closeClick: false,
//         openEffect: 'none',
//         closeEffect: 'none'
//     });
//     $('#contactForm').validate({
//         rules: {
//             name: {
//                 required: true
//             },
//             email: {
//                 required: true,
//                 email: true
//             }
//         },
//         messages: {
//             name: {
//                 required: "Please enter your full name."
//             },
//             email: {
//                 required: "Please enter your email address."
//             }
//         },
//         submitHandler: function (form) {
//             //Handle Ajax Method and success  / error here
//             $(".fancybox").trigger('click');
//         }
//     });
// });

$(document).ready(function(){
    $(".header__mob").on("click", function(){
        $(".header__burger").toggleClass("close-btn");
        $(".header__menu").toggleClass("open-menu");
        $("body").toggleClass('no-scroll');
    });
})

// $(document).ready(function() {
//     $("#signin__form").validate({
//         rules: {
//             required: true,
//             email: true,
//         },
//         messages: {
//             required: "Required input",
//             email: "Invalid email"
//         },
//         submitHandler: function(form) {
//             $('#modal-open').click(function(){
//                 $.fancybox.open({
//                     src: '#modal',
//                     type: 'inline'
//                 });
//             });
//         }
//     });
// })

$(document).ready(function () {
    $('#modal').fancybox({
    });
    $('#signin__form').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: "Please enter your email address."
            }
        },
        submitHandler: function (form) {
            $("#modal").trigger('click');
        }
    });
});





// $(document).ready(function(){
//     $("#signin__form").submit(function(e) {
//         e.preventDefault();
//         if ($(this).valid()) {
//             e.preventDefault();
//
//
//         } else {
//             console.log("nooo")
//             // do error stuff here
//         }
//     });
// })



