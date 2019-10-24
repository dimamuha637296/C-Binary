/*
tinc project builder
jsFile create on 04.06.2019 15:11:22
*/
$(document).ready(function () {
    // Слайдеры
    $('.teamSlider').owlCarousel({
        dots: false,
        nav: true,
        items: 1,
        loop: true,
        navText: ["<span class='icon-previous'></span>", "<span class='icon-next'></span>"]
    });
    $('.sertificatesSlider').owlCarousel({
        dots: false,
        nav: true,
        loop: true,
        navText: ["<span class='icon-previous'></span>", "<span class='icon-next'></span>"],
        responsive:{
            0:{
                items:1,
                margin: 0
            }, 
            768:{
                items:2,
                margin: 20
            },
            1200:{
                items:3,
                margin: 30
            }
        }
    });
    $('.documentsSlider').owlCarousel({
        dots: false,
        nav: true,
        items: 3,
        loop: true,
        navText: ["<span class='icon-previous'></span>", "<span class='icon-next'></span>"],
        responsive:{
            0:{
                items:1,
                margin: 0
            },
            768:{
                items:2,
                margin: 20
            },
            1200:{
                items:3,
                margin: 30
            }
        }
    });
    $('.partnersSlider').owlCarousel({
        dots: false,
        nav: true,
        loop: true,
        navText: ["<span class='icon-previous'></span>", "<span class='icon-next'></span>"],
        responsive:{
            0:{
                items:1
            }, 
            768:{
                items:2,
                margin: 20
                
            },
            1200:{
                items:3,
                margin: 30
            }
        }
    });
    $('.sessionsSlider').owlCarousel({
        dots: false,
        nav: true,
        loop: false,
        navText: ["<span class='icon-previous'></span>", "<span class='icon-next'></span>"],
        responsive:{
            0:{
                items:1,
                margin: 0
            }, 
            768:{
                items:2,
                margin: 20
            },
            1200:{
                items:3,
                margin: 30
            }
        }
    });
    $('.topCoursesSlider').owlCarousel({
        dots: false,
        nav: true,
        loop: true,
        navText: ["<span class='icon-previous'></span>", "<span class='icon-next'></span>"],
        responsive:{
            0:{
                items:1,
                margin: 0
            }, 
            768:{
                items:2,
                margin: 20
            },
            1200:{
                items:3,
                margin: 30
            }
        }
    });
    $('.reviewsSlider').owlCarousel({
        dots: false,
        nav: true,
        items: 2,
        loop: true,
        margin: 20,
        navText: ["<span class='icon-previous'></span>", "<span class='icon-next'></span>"],
        responsive:{
            0:{
                items:1,
                margin: 0
            },
            1200:{
                items:2,
                margin: 20
            }
        }
    });
    $('.topServicesSlider').owlCarousel({
        dots: false,
        nav: true,
        loop: true,
        navText: ["<span class='icon-previous'></span>", "<span class='icon-next'></span>"],
        responsive:{
            0:{
                items:1,
                margin: 0
            }, 
            768:{
                items:3,
                margin: 15
            },
            1200:{
                items:4,
                margin: 30
            }
        }
    });
    $('.topProductionSlider').owlCarousel({
        dots: false,
        nav: true,
        loop: true,
        navText: ["<span class='icon-previous'></span>", "<span class='icon-next'></span>"],
        responsive:{
            0:{
                items:1,
                margin: 0
            }, 
            768:{
                items:2,
                margin: 20
            },
            1200:{
                items:3,
                margin: 30
            }
        }
    });
    $('.brandsSlider').owlCarousel({
        dots: false,
        nav: true,
        loop: true,
        navText: ["<span class='icon-previous'></span>", "<span class='icon-next'></span>"],
        responsive:{
            0:{
                items:1,
                margin: 10
            },
            1200:{
                items:2,
                margin: 30
            }
        }
    });
    $('.gallerySlider').owlCarousel({
        dots: false,
        nav: true,
        items: 4,
        loop: false,
        margin: 30,
        navText: ["<span class='icon-previous'></span>", "<span class='icon-next'></span>"],
        responsive:{
            0:{
                items:1,
                margin: 0
            }, 
            768:{
                items:2,
                margin: 15
            },
            992:{
                items:3,
                margin: 15
            },
            1200:{
                items:4,
                margin: 30
            }
        }
    });
    $('.videoSlider').owlCarousel({
        dots: false,
        nav: true,
        navText: ["<span class='icon-previous'></span>", "<span class='icon-next'></span>"],
        items:1,
        loop: false,
        merge:true,
        video:true,
        center:true
    });
    
    // Аккордион
    var accord = $('.accordion:not(.disable)');
    accord.children('div:not(.active)').slideUp();
    // accord.find('.accordionContent.active').siblings('.accordionTitle').slideUp();
    accord.find('.accordionTitle').on('click', function () {
        $(this).siblings('.accordionContent').stop().slideToggle(500);
        $(this).stop().slideToggle(500);
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
        }
        else {
            $(this).addClass('active');
        }
    });
    accord.find('.icon-up').on('click', function () {
        $(this).parent().siblings('.accordionTitle').stop().slideToggle(500);
        $(this).parent().stop().slideToggle(500);
        if ($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active');
        }
        else {
            $(this).parent().addClass('active');
        }
    });

    // Маска
    $('input[type="tel"]').mask('+375 00 000 00 0000');

    // Кнопка-якорь
    $('.toTop').on('click', function(){
        $(".toTop").removeClass("visible");
        $("body,html").stop().animate({ scrollTop: 0}, 500);
    });
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 300) {
            $(".toTop").addClass("visible");
        } else {
            $(".toTop").removeClass("visible");
        }
    });

    // Выпадающие списки
    $('select').selectric({
        onInit: function() {
            $(".selectric .button").addClass("icon-down");
        }
    });
    // Модалка
    openMod();
    // Галлерея
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "close"
        ]
    });
    // Бургер
    $('.hamburger').on('click', function() {
        $(this).toggleClass('selected');
        $('.menu').toggleClass('active');
    });
});