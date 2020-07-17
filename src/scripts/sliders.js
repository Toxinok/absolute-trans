$(window).on('load', function () {
    $('.services .owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1,
                margin: 14,
            },
            861: {
                items: 3,
                margin: 40,
            },
            1201: {
                items: 3,
                margin: 40,
                nav: true,
            },
            1661: {
                items: 4,
                margin: 33,
                nav: true,
                navText: ['<span class="path1"></span><span class="path2"></span>', '<span class="path1"></span><span class="path2"></span>']
            },
        },
    });

    $('.popular .owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1,
                margin: 14,
            },
            861: {
                items: 2,
                margin: 30,
            },
            1201: {
                items: 2,
                margin: 30,
                nav: true,
            },
            1661: {
                items: 3,
                margin: 30,
                nav: true,
            },
        },
    });

    $('.reviews .owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1,
                margin: 14,
            },
            861: {
                items: 2,
                margin: 30,
            },
            1201: {
                items: 2,
                margin: 30,
                nav: true,
            },
            1661: {
                items: 3,
                margin: 30,
                nav: true,
            },
        },
    });

    $('.car-details .slider.owl-carousel').owlCarousel({
        items: 5,
        margin: 12,
        nav: true,
    });

    $('.car-details .slider-big.owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1,
                margin: 13,
            },
            861: {
                items: 1,
                margin: 16,
            },
        },
    });

    if (window.matchMedia('(max-width: 1660px)').matches) {
        $('.content--details .similar .cards__block').owlCarousel({
            responsive: {
                320: {
                    items: 1,
                    margin: 14,
                },
                861: {
                    items: 2,
                    margin: 30,
                },
                1201: {
                    items: 2,
                    margin: 50,
                    nav: true,
                },
            },
        });
    }

    $('.school-bus .slider--entertainments.owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1,
                margin: 14,
            },
            861: {
                items: 4,
                margin: 26,
            },
            1201: {
                items: 4,
                margin: 26,
                nav: true,
            },
            1661: {
                items: 4,
                margin: 42,
                nav: true,
            },
        },
    });

    $('.school-bus .slider--buses.owl-carousel').owlCarousel({
        responsive: {
            320: {
                items: 1,
                margin: 14,
            },
            861: {
                items: 2,
                margin: 30,
            },
            1201: {
                items: 2,
                margin: 30,
                nav: true,
            },
            1661: {
                items: 3,
                margin: 30,
                nav: true,
            },
        },
    });

    $('.staff-transportation .slider--main.owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1,
                margin: 14,
            },
            861: {
                items: 4,
                margin: 26,
            },
            1201: {
                items: 4,
                margin: 26,
                nav: true,
            },
            1661: {
                items: 4,
                margin: 42,
                nav: true,
            },
        },
    });

    $('.staff-transportation .similar .cards__block.owl-carousel').owlCarousel({
        responsive: {
            320: {
                items: 1,
                margin: 14,
            },
            861: {
                items: 2,
                margin: 30,
            },
            1201: {
                items: 2,
                margin: 30,
                nav: true,
            },
            1661: {
                items: 3,
                margin: 30,
                nav: true,
            },
        },
    });

    $('.company .slider.owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1,
                margin: 14,
            },
            861: {
                items: 4,
                margin: 26,
            },
            1201: {
                items: 4,
                margin: 26,
                nav: true,
            },
            1661: {
                items: 4,
                margin: 42,
                nav: true,
            },
        },
    });

    if (window.matchMedia('(max-width: 860px)').matches) {
        $('.team .team__block.owl-carousel').owlCarousel({
            items: 1,
            margin: 14,
        });
    }

    if (window.matchMedia('(max-width: 860px)').matches) {
        $('.customers .owl-carousel').owlCarousel({
            items: 1,
            margin: 14,
        });
        $('.partners .owl-carousel').owlCarousel({
            items: 1,
            margin: 14,
        });

    }

    $('.letters .owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 2,
                margin: 14,
            },
            861: {
                items: 3,
                margin: 17,
            },
            1201: {
                items: 3,
                margin: 17,
                nav: true,
            },
            1661: {
                items: 3,
                margin: 40,
                nav: true,
            }
        },
    });

    if (window.matchMedia('(max-width: 1300px)').matches) {
        $('.modal__news .news-item__images').owlCarousel({
            responsive: {
                0: {
                    items: 1,
                    margin: 14,
                },
                461: {
                    items: 1,
                    margin: 14,
                    autoWidth: true,
                },
                861: {
                    items: 3,
                    margin: 17,
                },
            },
        });
    }
});
