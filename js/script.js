$(document).ready(function () {
  $(".nav_large li a").click(function () {
    console.log(this)
    $(".nav_large li a").removeClass("active_link");
    $(this).addClass("active_link");
  });

  // Search button
  $(".search_button").click(function () {
    $(".search_input").toggleClass("h_16")
  })

  // Nav button
  const toggleNav = () => {
    $(".nav_small").toggleClass("left_0");
    $(".overlay").toggleClass("bg-black/70 z-30");
  };
  $(".nav_btn").click(toggleNav);
  $(".overlay").click(toggleNav);
  $(".nav_small li").click(toggleNav);
});

// Sliders
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

  $(".brand_slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: false,
    autoplay: true,
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
    ],
  });

  // Main Slider
  let swiper = new Swiper(".main_slider", {
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
  // Car Slider
  let carSlider = new Swiper(".car_slider", {
    speed: 1000,
    pagination: {
      el: ".car_pagination",
      dynamicBullets: true,
      clickable: true,
    },
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".car_next",
      prevEl: ".car_prev",
    },
  });
  // testimonial Slider
  let testimonial = new Swiper(".testi_slider", {
    speed: 500,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".testi_next",
      prevEl: ".testi_prev",
    },
  });
});

