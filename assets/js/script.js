/*-----------------------------------------------------------------------------------

 Template Name:Chatloop APP
 Template URI: themes.pixelstrap.com/chatloop
 Description: This is App Landing Page
 Author: Pixelstrap
 Author URI: https://themeforest.net/user/pixelstrap

 -----------------------------------------------------------------------------------*/
"use strict";
$(document).ready(function(){

    /**Popup  */

    
    /*------------------------
     loader
     --------------------------*/
     $('.loader-wrapper').fadeOut('slow', function() {
            $(this).remove();
        });
    
    /*----------------------------------------
     mobile menu nav click hide collapse
     ----------------------------------------*/
    var mobile_menu = $( window ).width();
    if(mobile_menu < 991){
        $("nav a.nav-link").on('click', function(event) {
            if(!$(this).hasClass('dropdown-toggle')){

                console.log('click');
                $(".navbar-collapse").collapse('hide');
            }

        });
    }

    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }

    /*------------------------
     darkheader
     --------------------------*/
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $(".navbar").addClass("darkHeader");
        } else {
            $(".navbar").removeClass("darkHeader");
        }
    });

    /*------------------------
     Tap to top
     --------------------------*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 600) {
            $('.tap-top').fadeIn();
        } else {
            $('.tap-top').fadeOut();
        }
    });
    $('.tap-top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

       /*-----------------------
     Team
     -------------------------*/
    $("#hide").on('click', function(event){
        $("p").hide();
    });
    $("#show").on('click', function(event){
        $("p").show();
    });
    $('.team-hover').hide();

    $(".team-under-box-button").on('click', function(event){
        $('.team-box').hide(1000);
        $('.team-hover').show(1000);
        $('.team-hover').fadeIn("slow");
    });
    $(".team-close-btn").on('click', function(event){
        $(".team-hover").hide(1000);
        $('.team-box').show(1000);
        $('.team-box').fadeIn("slow");
    });

    
    $("#mymenu li a").on('click', function(event){
        $('a.nav-link').removeClass('active');
        $(this).addClass('active');
    });

});






