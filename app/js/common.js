
$(document).ready(function(){
    if (window.innerWidth <= 666) {
        $(".blog__list").addClass('slider__blog');
    }
})

$(document).ready(function(){
    $('.slider__blog').slick({
        dots: true,
    });
})
$(document).ready(function(){
    $('.clients__review-slider').slick({
    });
})

$(document).ready(function(){
    $(".header__mob").on("click", function(){
        $(".header__burger").toggleClass("header__burger-close");
        $(".header__menu").toggleClass("header__menu-open");
        $("body").toggleClass('no-scroll');
    });
})

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
            $('#signin__form')[0].reset();
        }
    });
});




