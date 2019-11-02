// 'use strict'

$(document).ready(function () {

    // Доп. новости
    $('.hiddenNewsItems').slideUp();
    $(".allNewsButton").on('click', function () {
        let hiddenNews = $('.hiddenNewsItems');
        if (hiddenNews.hasClass('active')) {
            hiddenNews.slideUp().removeClass('active');
            $(this).removeClass('active');
            $(this).children(".allNewsButtonText").text('Все новости');
        } else {
            hiddenNews.slideDown().addClass('active');
            $(this).addClass('active');
            $(this).children(".allNewsButtonText").text('Скрыть новости');
        }
    });

    // Бургер
    $('.hamburger').on('click', function () {
        if ($(this).hasClass('selected')) {
            $('.hamburger').removeClass('selected');
            $('.modMenu').removeClass('active');
            $('body').removeClass('darkness');
        } else {
            $('.hamburger').addClass('selected');
            $('.modMenu').addClass('active');
            $('body').addClass('darkness');
            $('.modalFeedback').removeClass('open');
        }

        $('.modalFeedback').removeClass('open');
    });

    // Затемнение модалки и меню
    $('.overlay').on('click', function () {
        $('.hamburger').removeClass('selected');
        $('.modMenu').removeClass('active');
        $('body').removeClass('darkness');
        $('.modal').removeClass('open');
    });

    // Вызов модалки
    $('.feedbackBtn').click(function () {
        $('.modalFeedback').addClass('open');
        $('body').addClass('darkness');
        $('.hamburger').removeClass('selected');
        $('.modMenu').removeClass('active');
    });

    // Закрытие модалки
    $('.modal-close').on('click', function () {
        $('body').removeClass('darkness');
        $('.modal').removeClass('open');
    });

    // Галлерея
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "close"
        ]
    });

    // Слайдер
    $('.sliderItems').slick(getSliderSettings());

    // Настройки слайдера
    function getSliderSettings(){
        return {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            variableHeight: true,
            focusOnSelect: true,
            responsive: [{
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        };
    }

    // Отслеживание подменю
    function subMenuBuild() {
        if ($(window).width() < '992') {
            $('.subMenu').removeClass('onMD');

            $('.subMenuLink').on('click', function () {
                let subMenu = $(this).siblings('.subMenu');
                // if ( subMenu.hasClass('active') ) {
                //     subMenu.slideUp().removeClass('active');
                // } else {
                //     subMenu.slideDown().addClass('active');
                // }
                $(this).toggleClass('active');
                subMenu.slideToggle().toggleClass('active');
            });
        } else {
            $('.subMenu').addClass('onMD');
        }
    }
    subMenuBuild();

    // При изменении разрешения
    $(window).on('resize', function () {
        subMenuBuild();
        $('.sliderItems')[0].slick.refresh();
    });
});