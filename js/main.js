$(".first-slide-slider").owlCarousel({
    nav: false,
    dots: false,
    items: 1,
    loop:true,
    autoplay:true,
    addClassActive: true,
    autoplayTimeout:3000,
    lazyLoad:true
});

$(".slider-wrapper").owlCarousel({
    nav: true,
    navContainer: "#sliderNavWrapper",
    dots: false,
    loop:true,
    addClassActive: true,
    lazyLoad:true,
    center:true,
    responsive: {
        0: {
            items: 1,
        },
        1100: {
            items: 2,
        }
    }
});

$(".burger").click(function(e) {
    e.preventDefault();
    $(this).toggleClass('activeBurger');
    $('.header-right').toggleClass('activeNav')
})

$(function(){
    $("#numbers").mask("+7 (999) 999-99-99", {placeholder: " "});
});