$(document).ready(function () {

    // Loading Page
    
    $(".loading-screen").delay(3000).fadeOut(800, function () {
        $('body').css('overflow', 'visible');
    });




    // Trigger Scroll To Top
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('#top').fadeIn("fast"); // Fade in the arrow
        } else {
            $('#top').fadeOut("fast"); // Else fade out the arrow
        }
    });
    $('#top').click(function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });

    // Trigger Before & After Section 
    $('.myImageCompare').imagesCompare();

    // Trigger Testimonials Section 
    $("#immersive_slider").immersive_slider({
        container: ".main"
    });
    // Trigger Video Section 
    $(function () {
        $('.rvs-container').rvslider();
    });
    // Trigger FAQ Section 
    $(".question-section .section-header").on("click", function () {
        // console.log($(this).closest(".question-section"));
        $(this).closest(".question-section").find(".question-section-answer").collapse("toggle");
    });

    $(".category-question-section  .category-question-section-header").on("click", function () {
        // console.log($(this).closest(".category-question-section "));
        $(this).closest(".category-question-section").find(".category-question-section-container").collapse("toggle");
    });


});