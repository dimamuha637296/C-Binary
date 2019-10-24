$(document).ready(function () {
    $('.gallery').owlCarousel({
        dots: false,
        loop: true,
        items: 5.5,
        center: false
    })

    $('.mainSlider').owlCarousel({
        items: 1,
        loop: true,
        dotsContainer: '#customDots'
    })
});