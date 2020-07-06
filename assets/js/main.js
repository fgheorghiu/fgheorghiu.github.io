(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        $('[data-toggle="tooltip"]').tooltip();

        $(".logo_menu_area").sticky({ topSpacing: 0 });

        $('li.smooth-menu a').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '46';
            $('html,body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1500, 'easeInOutExpo');

            event.preventDefault();
        });

        $('.smooth').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '60';
            $('html,body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1000, 'easeInOutExpo');

            event.preventDefault();
        });

        $('.paralax_bg').scrolly({ bgParallax: true });

        new WOW().init();

        var selectedClass = "";
        $(".fil-cat").on('click', function() {
            selectedClass = $(this).attr("data-rel");
            $("#portfolio").fadeTo(100, 0.1);
            $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
            setTimeout(function() {
                $("." + selectedClass).fadeIn().addClass('scale-anm');
                $("#portfolio").fadeTo(300, 1);
            }, 300);
        });

        $('.mobileMenu_icon').on('click', function() {
            $('.mobilemenu').toggle();

        });

        $('.mobilemenu a').on('click', function() {
            if ($(window).width() <= 768) {
                $('.mobilemenu').toggle();
            }
        });
    });

    $(window).on('load', function(event) {
        $('#preloader').fadeOut();
        $('.preloader_spinner').delay(222350).fadeOut('slow');
        $("body").removeClass("preloader_active");
    });


}(jQuery));
