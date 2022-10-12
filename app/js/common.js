const sliderReview = () => {
    $('.clients__review-slider').slick();
}

const sliderBlog = () =>{
    if (window.innerWidth <= 666) {
        $(".blog__list").addClass('slider__blog');
        $('.slider__blog').slick({
            dots: true,
        });
    }
}
const openMenu = () => {
    $(".header__burger").toggleClass("header__burger-close");
    $(".header__menu").toggleClass("header__menu-open");
    $("body").toggleClass('no-scroll');
}
const validateForm = () => {
    $('#modal').fancybox();
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
            $('#signin__form')[0].reset();
        }
    });

}

$(document).ready(function(){
    sliderReview();
    sliderBlog()
})

$( window ).on( "load", function() {
    validateForm()
    $(".header__mob").on("click", openMenu);
});
