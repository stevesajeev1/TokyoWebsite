// Steve Sajeev, Seminole State College, COP2831, Rebekah Rosario


"use strict";
// Function for updating slideshow content
const updateSlideshow = (slide) => {
    // Get info from slide
    const image = $(slide).attr("src");
    const source = $(slide).attr("data-source");
    const caption = $(slide).attr("data-caption");
    const date = $(slide).attr("data-date");

    $("#display, #source, #caption, #date").fadeOut(() => {
        // Update slideshow
        $("#display").attr("src", image);
        $("#source").text("Image Source: " + source);
        $("#caption").text(caption);
        $("#date").text(date);

        $("#display, #source, #caption, #date").fadeIn();
    });
}

$().ready(() => {
    // Start slideshow
    const slides = $(".slide");
    updateSlideshow(slides[0]);
    
    let slideNumber = 1;
    let slideshow = setInterval(() => {
        slideNumber %= slides.length;
        updateSlideshow(slides[slideNumber]);
        slideNumber++;
    }, 4000);
    
    // Pause slideshow on hover
    $("#display").mouseover(() => {
        clearInterval(slideshow);
    });

    // Preload images
    $("img").each(function() {
        const img = new Image();
        img.src = $(this).attr("src");
    });
    
    $("#display").mouseout(() => {
        slideshow = setInterval(() => {
            slideNumber %= slides.length;
            updateSlideshow(slides[slideNumber]);
            slideNumber++;
        }, 4000);
    });

    // Move focus to activity select
    $("#activity").focus(); 

    // Create datepicker
    $("#datepicker").datepicker();

    // Data validation on submit
    $("#activity-form").submit((event) => {
        event.preventDefault();

        let valid = true;

        const selectedActivity = $("#activity").find(":selected").text();
        if (selectedActivity.trim() == "")  {
            $("#activity").next().text("* Required field.");
            valid = false;
        } else {
            $("#activity").next().text("*");
        }

        const selectedDate = $("#datepicker").val();
        if (selectedDate.trim() == "") {
            $("#datepicker").next().text("* Required field.");
            valid = false;
        } else if (new Date(selectedDate) < new Date(new Date().toDateString())) {
            $("#datepicker").next().text("* Invalid date.");
            valid = false;
        } else {
            $("#datepicker").next().text("*");
        }

        const name = $("#name").val();
        if (name.trim() == "") {
            $("#name").next().text("* Required field.");
            valid = false;
        } else {
            $("#name").next().text("*");
        }

        if (valid) {
            // Clear fields
            $("#activity").text("");
            $("#datepicker").val("");
            $("#name").val("");
            
            // Show success message
            $("#success").slideDown().delay(2000).slideUp();
        }
    });
});