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

$(".burger").click(function(e) {
    e.preventDefault();
    $(this).toggleClass('activeBurger');
    $('.header-right').toggleClass('activeNav')
})

$(function(){
    $("#numbers").mask("+7 (999) 999-99-99", {placeholder: " "});
});