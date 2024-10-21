(function ($) {
  "use strict";

  // Mobile Menu
  $(".mobile-menu nav").meanmenu({
    meanScreenWidth: "990",
    meanMenuContainer: ".mobile-menu",
    onePage: false,
  });

  //Header Search
  if ($(".search-box-outer").length) {
    $(".search-box-outer").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  // Slider Active
  $(".slider_list").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 5000,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1920: {
        items: 1,
      },
    },
  });

  // Loder  //
  $(function () {
    $("body").addClass("loaded");
  });

  /*---------------------
    WOW active js 
    --------------------- */
  new WOW().init();

  //======< scrollcue js >======
  $(function () {
    scrollCue.init({
      duration: 2500,
      interval: -0.7,
      percentage: 0.9,
      smartSpeed: 5000,
    });
  });

  /*---------------------
    Nivo Slider active js 
    --------------------- */
  $("#mainSlider").nivoSlider({
    directionNav: true,
    animSpeed: 500,
    slices: 18,
    pauseTime: 900000,
    pauseOnHover: false,
    controlNav: true,
    prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
    nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>',
  });
  // counterUp
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
  // sticky
  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 100) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });

  /* Portfolio Isotope  */
  $(".image_load").imagesLoaded(function () {
    if ($.fn.isotope) {
      var $portfolio = $(".image_load");

      $portfolio.isotope({
        itemSelector: ".grid-item",

        filter: "*",

        resizesContainer: true,

        layoutMode: "masonry",

        transitionDuration: "0.8s",
      });
      $(".menu-filtering li").on("click", function () {
        $(".menu-filtering li").removeClass("current_menu_item");

        $(this).addClass("current_menu_item");

        var selector = $(this).attr("data-filter");

        $portfolio.isotope({
          filter: selector,
        });
      });
    }
  });

  // mega menu
  $(document).ready(function () {
    "use strict";
    $(".menu > ul > li:has( > ul)").addClass("menu-dropdown-icon");
    $(".menu > ul > li > ul:not(:has(ul))").addClass("normal-sub");
    $(".menu > ul").before('<a href="#" class="menu-mobile">&nbsp;</a>');
    $(".menu > ul > li").hover(function (e) {
      if ($(window).width() > 943) {
        $(this).children("ul").stop(true, false).fadeToggle(150);
        e.preventDefault();
      }
    });
    $(".menu > ul > li").click(function () {
      if ($(window).width() <= 943) {
        $(this).children("ul").fadeToggle(150);
      }
    });
    $(".menu-mobile").click(function (e) {
      $(".menu > ul").toggleClass("show-on-mobile");
      e.preventDefault();
    });
  });
  $(window).resize(function () {
    $(".menu > ul > li").children("ul").hide();
    $(".menu > ul").removeClass("show-on-mobile");
  });

  // Venubox

  $(".venobox").venobox({
    numeratio: true,

    infinigall: true,
  });

  // Case Study Active
  $(".case_study_list").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 4000,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1000: {
        items: 4,
      },
      1920: {
        items: 5,
      },
    },
  });

  // Case Study Active
  $(".case_study_list2").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 4000,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  });
  // Case Study Active
  $(".case_study_list3").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    center: true,
    dotsech: true,
    nav: false,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1500: {
        items: 2,
      },
      1920: {
        items: 3,
      },
    },
  });

  // Case Study Active
  $(".portfolio-list").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 4000,
    autoplayTimeout: 1500,
    dots: false,
    nav: false,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 4,
      },
      1920: {
        items: 5,
      },
    },
  });

  // Testimonial Active
  $(".testimonial_list").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  });
  // Testimonial List Two Active
  $(".testimonial_list2").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1920: {
        items: 1,
      },
    },
  });

  // Testimonial List Three Active
  $(".testimonial_list3").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1920: {
        items: 1,
      },
    },
  });
  // Testimonial List Tthree Active
  $(".testimonial_list4").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1920: {
        items: 2,
      },
    },
  });

  // Testimonial List five Active
  $(".testimonial_list5").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    nav: true,
    navText: [
      "<i class='bi bi-arrow-left''></i>",
      "<i class='bi bi-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  });

  // Testimonial List five Active
  $(".testimonial-list6").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 3500,
    autoplayTimeout: 1500,
    dots: true,
    nav: false,
    navText: [
      "<i class='bi bi-arrow-left''></i>",
      "<i class='bi bi-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1920: {
        items: 1,
      },
    },
  });

  // Brand Active
  $(".brand_list").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 4000,
    autoplayTimeout: 1500,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 5,
      },
      1000: {
        items: 5,
      },
      1920: {
        items: 5,
      },
    },
  });
  // Brand Two
  $(".brand_list2").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1000: {
        items: 4,
      },
      1920: {
        items: 4,
      },
    },
  });
  // Brand Three
  $(".brand-list3").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    nav: false,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 5,
      },
      1000: {
        items: 5,
      },
      1920: {
        items: 5,
      },
    },
  });
  // Service One
  $(".service_list").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  });
  // Service One
  $(".service_list1").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    nav: true,
    navText: [
      "<i class='bi bi-arrow-left''></i>",
      "<i class='bi bi-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 4,
      },
      1000: {
        items: 4,
      },
      1920: {
        items: 4,
      },
    },
  });

  // team One
  $(".team-list").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dotsEach: true,
    dots: true,
    nav: true,
    navText: [
      "<i class='bi bi-arrow-left''></i>",
      "<i class='bi bi-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 4,
      },
      1000: {
        items: 4,
      },
      1920: {
        items: 4,
      },
    },
  });

  // blog One
  $(".blog-list").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 1500,
    dots: false,
    nav: true,
    navText: [
      "<i class='bi bi-arrow-left''></i>",
      "<i class='bi bi-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  });
  // blog One
  $(".blog-list1").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left''></i>",
      "<i class='fa fa-angle-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1920: {
        items: 2,
      },
    },
  });

  // blog One
  $(".blog-list2").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 4000,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left''></i>",
      "<i class='fa fa-angle-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  });

  // Dark Js

  $(".toggle-switch").on("click", function (event) {
    $("body").toggleClass("dark");
  });

  $(document).ready(function () {
    $("#bar1").barfiller({ duration: 7000 });
    $("#bar2").barfiller({ duration: 7000 });
    $("#bar3").barfiller({ duration: 7000 });
  });

  /*--------------------------
     scrollUp
    ---------------------------- */
  $.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "fade",
  });

  //======< Custom Tab >======
  $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");

  $(".tab ul.tabs li a").on("click", function (g) {
    var tab = $(this).closest(".tab"),
      index = $(this).closest("li").index();

    tab.find("ul.tabs > li").removeClass("current");
    $(this).closest("li").addClass("current");

    tab
      .find(".tab_content")
      .find("div.tabs_item")
      .not("div.tabs_item:eq(" + index + ")")
      .slideUp();
    tab
      .find(".tab_content")
      .find("div.tabs_item:eq(" + index + ")")
      .slideDown();

    g.preventDefault();
  });
})(jQuery);
