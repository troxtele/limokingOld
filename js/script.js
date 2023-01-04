$(document).ready(function () {
  let owl = $(".car_slider");
  owl.owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    // autoplay: true,
    autoplayTimeout: 3000,
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
  let testi = $(".testi_slifder");
  testi.owlCarousel({
    items: 1,
    center: true,
    loop: true,
    margin: 10,
    nav: true,
    // autoplay: true,
    autoplayTimeout: 3000,
  });

  // Custom Button
  $(".left_btn").click(function () {
    testi.trigger("next.owl.carousel");
  });
  $(".right_btn").click(function () {
    testi.trigger("prev.owl.carousel");
  });

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > 136) {
  //       console.log("working")
  //       $(".header-bottom").addClass("bg-zinc-800");
  //   } else {
  //     console.log(4)
  //     $(".header-bottom").removeClass("bg-zinc-800");
  //     }
  // })
});



var swiper = new Swiper(".home-slider", {
  speed: 800,
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
