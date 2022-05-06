$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      //clearHeader, not clearheader - caps H
      $(".mobile-nav").addClass("header-bg");
    } else {
      $(".mobile-nav").removeClass("header-bg");
    }
  });

  // hero section
  // switcing between forms
  // $('#treatmentBtn').click(function () {
  //   $('#treatmentBtn').removeClass('btn-active');
  //   $('#eventBtn').addClass('btn-active');
  //   $('.treatment-form').removeClass('d-none');
  //   $('.event-form').addClass('d-none');
  // });
  // $('#eventBtn').click(function () {
  //   $('#treatmentBtn').addClass('btn-active');
  //   $('#eventBtn').removeClass('btn-active');
  //   $('.treatment-form').addClass('d-none');
  //   $('.event-form').removeClass('d-none');
  // });
  //
  // mobile search product-list

  $("#mobleSearchBtn").click(function () {
    $(".mobile-search-list").removeClass("d-none");
  });
  // close-mobile-search-list
  $(".close-mobile-search-list").click(function () {
    $(".mobile-search-list").addClass("d-none");
  });
  // close-desktop-search-list
  $("#desktopSearchInput").click(function (e) {
    $(".desktop-product-search-list").removeClass("d-none");
    e.stopPropagation();
  });
  // hide search list click anywhere on scree ( not: input fild and search list)
  $(document).on("click", function (e) {
    if (!$(".desktop-product-search-list").hasClass("d-none")) {
      $(document).click(function () {
        $(".desktop-product-search-list").addClass("d-none");
      });
      $(".desktop-product-search-list").click(function (e) {
        e.stopPropagation();
      });
    }
  });
  //
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 10,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },

    breakpoints: {
      550: {
        slidesPerView: 3.5,
      },
      767: {
        slidesPerView: 4.5,
      },
      992: {
        slidesPerView: 5.5,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  });

  var serviceslist = new Swiper(".serviceslist-swiper", {
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 10,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   autoplay: true,
    breakpoints: {
      550: {
        slidesPerView: 3.5,
      },
      767: {
        slidesPerView: 5.5,
      },
      992: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 7,
      },
      1200: {
        slidesPerView: 8,
      },
      1400: {
        slidesPerView: 10,
      },
    },
  });
  // popular services
  var popularservicesSwiper = new Swiper(".popularservices-swiper", {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 20,
    navigation: {
      nextEl: ".popularservices-swiper-button-next",
      prevEl: ".popularservices-swiper-button-prev",
    },
    breakpoints: {
      550: {
        slidesPerView: 2,
      },

      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  // ==
  var productlist = new Swiper(".productlist-swiper", {
    loop: true,
    slidesPerView: 1.7,
    spaceBetween: 15,

    breakpoints: {
      400: {
        slidesPerView: 2.5,
      },

      992: {
        slidesPerView: 3.5,
      },
      992: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  });
  var shopbeauty = new Swiper(".shopbeauty-swiper", {
    loop: true,
    slidesPerView: 1.7,
    spaceBetween: 15,

    breakpoints: {
      400: {
        slidesPerView: 2.5,
      },

      992: {
        slidesPerView: 3.5,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 6,
      },
    },
  });
  // ==

  var insights = new Swiper(".insights-swiper", {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 10,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },

    breakpoints: {
      550: {
        slidesPerView: 2.5,
      },
      767: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });
});
