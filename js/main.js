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

$(".product-table--img").owlCarousel({
    nav: true,
    navContainer: "#tableNavWrapper",
    dots: false,
    items: 1,
    loop:true,
    lazyLoad:true
});

$(".slider-wrapper").owlCarousel({
    nav: true,
    navContainer: "#sliderNavWrapper",
    dots: true,
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

$(function(){
    $("#numbersPopup").mask("+7 (999) 999-99-99", {placeholder: " "});
});

$('.productSlide').on('click', function(e){
    e.preventDefault();
    $('html,body').stop().animate({ scrollTop: $('#product').offset().top }, 1000);
    $(".burger").removeClass('activeBurger')
    $('.header-right').removeClass('activeNav')
});

$('.faqSlide').on('click', function(e){
    e.preventDefault();
    $('html,body').stop().animate({ scrollTop: $('#faq').offset().top }, 1000);
    $(".burger").removeClass('activeBurger')
    $('.header-right').removeClass('activeNav')
});

$('.contactSlide').on('click', function(e){
    e.preventDefault();
    $('html,body').stop().animate({ scrollTop: $('#contact').offset().top }, 1000);
    $(".burger").removeClass('activeBurger')
    $('.header-right').removeClass('activeNav')
});

$(".popupOpen").click(function(){
    $(".popup, .popup-fon").show();
});

$(".popup-close").click(function(){
    $(".popup, .popup-fon").hide();
});

$(".popup-fon").click(function(){
    $(".popup, .popup-thanks, .popup-fon").hide();
});