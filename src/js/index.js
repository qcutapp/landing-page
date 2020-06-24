"use strict";



$(document).ready(function () {
    AOS.init({
        duration: 1000,
    });
    
  // Add navbar background
  $(window).scroll(function () {
    var position = $(document).scrollTop();
    if (position > 0) {
      $(".navbar").addClass("has-bg");
    } else {
      $(".navbar").removeClass("has-bg");
    }
  });
});
