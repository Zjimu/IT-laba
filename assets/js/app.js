$(function() {

    var header = $("#header");
    //var headerH = $("#header").innerHeight();
    var headerH = 0;
    var scrolloffset = 0;

    /* Fixed header */
    
    $(window).on("scroll", function() {

        scrolloffset = $(this).scrollTop();

        if ( scrolloffset > headerH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    });


    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockID = $(this).data('scroll');
        var blockoffSet = $(blockID).offset().top;

        $("html, body").animate({
            scrollTop: blockoffSet
        }, 500);
    });



});