$(document).ready(function () {
  let owl = $(".car_slider");
  owl.owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: false,
    navigation: true,
    autoplay: true,
    autoplayTimeout: 3000,
    rewind: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Custom Button
  $(".next_btn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".prev_btn").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  // Testilmonial Carousel
  let brand = $(".car_brands");
  brand.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoWidth: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  $(".brand_slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // Nav button
  const toggleNav = () => {
    $(".nav_links").toggleClass("left_0");
    $(".overlay").toggleClass("bg-black/70 z-30");
  };
  $(".nav_btn").click(toggleNav);
  $(".overlay").click(toggleNav);
});

let swiper = new Swiper(".home-slider", {
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let testiSlide = new Swiper(".test", {
  speed: 400,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".left_btn",
    prevEl: ".right_btn",
  },
});
