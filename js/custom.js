$(function () {
    'use strict'; // Start of use strict

    /*--------------------------
    scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*------------------------------------------------------------------
        Year
    ------------------------------------------------------------------*/
    $(function () {
        var theYear = new Date().getFullYear();
        $('#year').html(theYear);
    });

    $('.content-carousel').owlCarousel({
        loop: true,
            items: 3,
            margin:30,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplay: true,
            autoHeight: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                 // breakpoint from 991 up
                 575: {
                    items: 2
                },
                // breakpoint from 991 up
                991: {
                    items: 2
                },
                // breakpoint from 992 up
                992: {
                    items: 3
                }
            }
    });
    
    /*------------------------------------------------------------------
           Mobile Menu Active
    ------------------------------------------------------------------*/
    jQuery('.mobile-menu-active').meanmenu({
        meanMenuContainer: '.mobile-menu-container',
        meanScreenWidth: "993"
    });

    /*------------------------------------------------------------------
          circlechart
    ------------------------------------------------------------------*/
     $('.circlechart').circlechart();

   /*------------------------------------------------------------------
         Progress Bar
    ------------------------------------------------------------------*/

     var skills = {
        ht: 75,
        jq: 55,
        sk: 90,
        ph: 75,
        il: 90,
        in: 85
    };

    $.each(skills, function(key, value) {
        var skillbar = $("." + key);

        skillbar.animate(
            {
                width: value + "%"
            },
            3000,
            function() {
                $(".speech-bubble").fadeIn();
            }
        );
    });
    /*--------------------------
       Header Searchbox
      ---------------------------- */
    $('.header-searchtrigger').on('click', function () {
        $(this).find('.fa').toggleClass('fa-search fa-close');
        $(this).siblings('.header-searchbox').toggleClass('is-visible');
    });
    /*------------------------------------------------------------------
		Sign In/Up Popup
    ------------------------------------------------------------------*/

    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'mfp-fade'
    });

    // Popup Gallery JS
    $('.popup-gallery').magnificPopup({
        delegate: '.view-image',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
    });


    /*------------------------------------------------------------------
	  CounterUp
    ------------------------------------------------------------------*/

    $('.countdwon-number').counterUp({
        delay: 10,
        time: 2000,
    });

    /*------------------------------------------------------------------
        Navigation 
    ------------------------------------------------------------------*/

    window.onscroll = function () {
        myFunction()
    };
    var header = document.getElementById("navigation");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    /*------------------------------------------------------------------
        Video Popup 
    ------------------------------------------------------------------*/
    $('.video-play-btn').magnificPopup({
        type: 'video'
    });

    /*------------------------------------------------------------------
        Scroll Down Speed
    ------------------------------------------------------------------*/

    $('a.page-scroll').on('click', function (e) {
        var targetHref = $(this).attr('href');
        var navbar = $('.navbar').outerHeight();
        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - navbar
        }, 1250, 'easeInOutExpo');
        e.preventDefault();
    });
    /*------------------------------------------------------------------
        Menu Bar Toggle
    ------------------------------------------------------------------*/

    $('.bar-toggler').on('click', function (e) {
        $('.menu-bar').toggleClass('active');
        $('.bar-toggler').toggleClass('change');
        e.preventDefault();
    });


  
});

/*------------------------------------------------------------------
 Loader 
------------------------------------------------------------------*/
jQuery(window).on("load scroll", function () {
    'use strict'; // Start of use strict
    // Loader 
    $('#dvLoading').fadeOut('slow', function () {
        $(this).remove();
    });
    $('.google-map').on('click', function () {
        $('.google-map').find('iframe').css("pointer-events", "auto");
    });
    //Animation Numbers	 
    jQuery('.animateNumber').each(function () {
        var num = jQuery(this).attr('data-num');
        var top = jQuery(document).scrollTop() + (jQuery(window).height());
        var pos_top = jQuery(this).offset().top;
        if (top > pos_top && !jQuery(this).hasClass('active')) {
            jQuery(this).addClass('active').animateNumber({
                number: num
            }, 2000);
        }
    });

});

/*--------------------------
       Search Popup JS
    ---------------------------- */
    $('.close-btn').on('click',function() {
        $('.search-overlay').fadeOut();
        $('.search-btn').show();
        $('.close-btn').removeClass('active');
    });
 $('.search-btn').on('click',function() {
        $(this).hide();
        $('.search-overlay').fadeIn();
        $('.close-btn').addClass('active');
    });  

    /* ==================================================
            Hero Slider Carousel
         ===============================================*/
		
         $('.hero-sldr').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
			autoplayTimeout:9000,
            items: 1,
            navText: [
                "<i class='ti-angle-left'></i>",
                "<i class='ti-angle-right'></i>"
            ],
        });

 