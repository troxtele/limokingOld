// <--------------------SLIDERS-------------------->
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

// testimonial Slider
let testimonial = new Swiper(".testi_slider", {
  speed: 500,
  loop: true,
  navigation: {
    nextEl: ".testi_next",
    prevEl: ".testi_prev",
  },
});
// Car Slider
let carSlider = new Swiper(".car_slider", {
  speed: 500,
  autoplay: true,
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".car_next",
    prevEl: ".car_prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
// Brand Slider
let brandSlider = new Swiper(".brand_slider", {
  speed: 500,
  loop: true,
  slidesPerView: 2,
  autoplay: true,
  breakpoints: {
    500: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

// <---------------------------- Replaced with Alpine js ---------------------------- >

// const smallNav = document.querySelector(".nav_small");
// const overlay = document.querySelector(".overlay");
// const navBtn = document.querySelector(".nav_btn");
// const navLi = document.querySelector(".nav_small li");

// const toggleNav = () => {
//   smallNav.classList.toggle("left_0");
//   overlay.classList.toggle("");
//   overlay.classList.toggle("");
//   console.log(overlay);
// };

// navBtn.onclick = () => {
//   toggleNav();
// };
// overlay.onclick = () => {
//   toggleNav();
// };
// navLi.onclick = () => {
//   toggleNav();
// };

// Active nav link
// const navLarge = [...document.querySelectorAll(".nav_large li a")];
// navLarge.map((link) => {
//   link.onclick = () => {
//     navLarge.map((link) => {
//       link.classList.remove("active_link");
//     });
//     link.classList.add("active_link")
//   }
// })

// Search Button
// const searchBtn = document.querySelector(".search_button");
// const searchInput = document.querySelector(".search_input");
// searchBtn.onclick = () => {
//   searchInput.classList.toggle("h_16");
// }
