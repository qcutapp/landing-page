"use strict";

// Animate on scroll dependencies
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init({
  duration: 1000,
});

// Bootstrap dependencies
import $ from "jquery";
import "bootstrap/js/src/collapse.js";
import "bootstrap/js/src/scrollspy.js";

// Toggle Navbar background
$(window).scroll(function () {
  const position = $(document).scrollTop();
  if (position > 0) {
    $(".navbar").addClass("has-bg");
  } else {
    $(".navbar").removeClass("has-bg");
  }
});
