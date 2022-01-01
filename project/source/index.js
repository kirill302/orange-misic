const introSlider = new Swiper(".intro-slider", {
  slidesPerView: 5,
  initialSlide: 2,
  centeredSlides: true,
  slideActiveClass: "_active",
  slideNextClass: "_next",
  slidePrevClass: "_prev",
  reverseDirection: false,

  autoplay: {
    delay: 1000,
  },
  loop: true,
  speed: 1000,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  effect: "creative",
  creativeEffect: {
    limitProgress: 5,
    prev: {
      translate: ["-100%", 0, 0],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    567: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});