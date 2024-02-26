// Steve Sajeev, Seminole State College, COP2831, Rebekah Rosario


"use strict";
$().ready(() => {
    // Preload images
    $("img").each(function() {
        const img = new Image();
        img.src = $(this).attr("src");
    });

    // Create accordion
    $("#container").accordion();

    // Add flex grow when accordion is activated
    $(".ui-accordion-content-active").css("flex-grow", 1);

    // Handle accordion click
    $("#container").on("accordionbeforeactivate", (event, ui) => {
        // Remove flex-grow from old active content
        $(ui.oldPanel).css("flex-grow", 0);
        // Add flex-grow to new active content
        $(ui.newPanel).css("flex-grow", 1);
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