// Steve Sajeev, Seminole State College, COP2831, Rebekah Rosario


"use strict";
$().ready(() => {
    $("#toggle").change(function() {
        if ($(this).is(":checked")) { // View airports
            // Update embedded map
            $("#map").attr("src", "https://www.google.com/maps/d/embed?mid=1oIAfAu1zVeM4HybwIt95u6nxuNumLtM&ehbc=2E312F");

            // Update header
            $("#info-header").text("Airport options in Tokyo include:");
        } else { // View hotels
            // Update embedded map
            $("#map").attr("src", "https://www.google.com/maps/d/embed?mid=1ZyhJ7UeGQXo-r3Dt3tel3i8sA2ilX1Q&ehbc=2E312F");

            // Update header
            $("#info-header").text("Hotel options in Tokyo include:");
        }
        
        // Change list that is showing
        $("#hotel-list").toggleClass("show");
        $("#airport-list").toggleClass("show");
    });
});