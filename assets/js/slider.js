"use strict";
$(document).ready(function(){
/*-------------------------
 Testimonial
 ---------------------------*/
    var testimonial = $(".testimonial-slider");
    testimonial.owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        items:1
    });
    var testimonial = $(".testimonial-slider-rtl");
    testimonial.owlCarousel({
        rtl:true,
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        items:1
    });
/*--------------------------
 Plan Slider
 ----------------------------*/
    var plan = $(".plan-slider");
    plan.owlCarousel({
        loop:true,
        items:4,
        margin:15,
        navClass: ['owl-prev', 'owl-next'],
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true
            },
            600:{
                items:2,
                nav:false,
                dots:true
            },
            767:{
                items:2,
                nav:false,
                dots:true
            },
            992:{
                items:3,
                nav:false,
                dots:true
            },
            1000:{
                items:4               
            }
        }

    });
    var plan = $(".plan-slider-rtl");
    plan.owlCarousel({
        rtl:true,
        loop:true,
        items:4,
        margin:15,
        navClass: ['owl-prev', 'owl-next'],
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true
            },
            600:{
                items:2,
                nav:false,
                dots:true
            },
            767:{
                items:2,
                nav:false,
                dots:true
            },
            992:{
                items:3,
                nav:false,
                dots:true
            },
            1000:{
                items:4
            }
        }
    });
/*----------------------
 Team slider
 ------------------------*/
    var team = $(".team-slider");
    team.owlCarousel({
        loop:false,
        margin:15,
        nav:false,
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2,
                margin:12
            },
            600:{
                items:2
            },
            767:{
                items:2
            },
            768:{
                items:2,
                margin:15
            },
            992:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
    var team = $(".team-slider-rtl");
    team.owlCarousel({
        rtl:true,
        loop:false,
        margin:15,
        nav:false,
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2,
                margin:12
            },
            600:{
                items:2
            },
            767:{
                items:2
            },
            768:{
                items:2,
                margin:15
            },
            992:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
/*--------------------------
 testimonial slider
 ----------------------------*/
    var testimonial = $(".testimonial-slider");
    testimonial.owlCarousel({});

/*------------------------
 News slider
 --------------------------*/
    var news = $(".news-slider");
    news.owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        items:3,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
    var news = $(".news-slider-rtl");
    news.owlCarousel({
        rtl:true,
        loop:true,
        margin:30,
        nav:false,
        items:3,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

/*----------------------
 Screen slider
 -------------------------*/
var swiper = new Swiper('.swiper-screenshots-container-1', {
    effect: 'coverflow',
    grabCursor: true,
    initialSlide: 2,
    centeredSlides: true,
    loop: true,
    spaceBetween: 0,
    slidesPerView: 4,
    pagination: false,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.43,
        slideShadows: false,
    },
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            coverflowEffect: {
                depth: 50,
                modifier: 0,
            },
        },
        640: {
            slidesPerView: 3,
            coverflowEffect: {
                depth: 80,
                modifier: 0,
            },
        }
    }
});
});