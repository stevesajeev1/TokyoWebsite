// Steve Sajeev, Seminole State College, COP2831, Rebekah Rosario


"use strict";
// Function to fade in events
const animateTimeline = () => {
    $(".vtimeline-content").each(function() {
        // Code to determine whether an element is visible on screen
        const docViewTop = $(window).scrollTop();
        const docViewBottom = docViewTop + $(window).height();

        const elemTop = $(this).offset().top;
        const imgContainer = $(this).find(".img-container");
        const elemBottom = elemTop + $(this).height() - imgContainer.height();

        if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
            // Determine if already animated
            if ($(this).attr("data-animated") == undefined) {
                $(this).attr("data-animated", "animated");
                $(this).animate({ opacity: 1 }, { easing: "linear", duration: 50 })
            }
        } else {
            // Revert fade in
            $(this).removeAttr("data-animated");
            $(this).css("opacity", 0);
        }
    });
}

$().ready(() => {
    // Initialize vertical-timeline plugin
    $("#timeline").verticalTimeline({
        arrows: false
    });

    // Preload images
    $("img").each(function() {
        const img = new Image();
        img.src = $(this).attr("src");
    });

    // Fade animations for content
    animateTimeline();

    $("#container").scroll(() => {
        animateTimeline();
    });

    // Image hover
    $("img").next().hide();
    $("img").mouseover(function() {
        $(this).next().width($(this).width() - 40);
        $(this).next().show();
    });
    $("img").mouseout(function() {
        $(this).next().hide();
    });
});