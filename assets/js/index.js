// // on scorll navbar
window.onscroll = function () {
    scrollFunction();
  };
  
  var first = true;
  
  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("navbar").classList.add('fixed-navbar');
    }
     else {
      document.getElementById("navbar").classList.remove('fixed-navbar');
    }
  }
// slider
// $(document).ready(function () {
//   (function ($) {
// $('.style-carousel').owlCarousel({
//   items:3,
//   loop:true,
//   margin:20,
//   nav:false,
//   dots:false,
//   autoplay:false,
//   autoplayTimeout:5000,
//   autoplayHoverPause:true,
//   // navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:1
//       },
//       1000:{
//           items:3
//       }
//   }
// })
// $( ".owl-prev").html('<img src="assets/img/index/owl-next.svg" alt="client" class="h-100 w-100 img-fluid">');
//  $( ".owl-next").html('<img src="assets/img/index/owl-preview.svg" alt="client" class="h-100 w-100 img-fluid">');
// })(jQuery);
// });

// marquee start
// function Marquee(selector, speed) {
//   const parentSelector = document.querySelector(selector);
//   const clone = parentSelector.innerHTML;
//   const firstElement = parentSelector.children[0];
//   let i = 0;
//   let marqueeInterval;

//   parentSelector.insertAdjacentHTML('beforeend', clone);
//   parentSelector.insertAdjacentHTML('beforeend', clone);

//   function startMarquee() {
//     marqueeInterval = setInterval(function () {
//       firstElement.style.marginLeft = `-${i}px`;
//       if (i > firstElement.clientWidth) {
//         i = 0;
//       }
//       i = i + speed;
//     }, 0);
//   }

//   function stopMarquee() {
//     clearInterval(marqueeInterval);
//   }

//  parentSelector.addEventListener('mouseenter', stopMarquee);
//   parentSelector.addEventListener('mouseleave', startMarquee);

//   startMarquee();
// }

// window.addEventListener('load', () => Marquee('.marquee1', 0.3));

// hero slider
var swiper = new Swiper(".heroSlider", {
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// testimonal
var swiper2 = new Swiper(".testimonalSlider", {
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    678: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 24,
    // },
  },
}, 
pagination: {
  el: ".swiper-pagination",
  // type: "progressbar",
  clickable:true,
},
// navigation: {
//   nextEl: ".swiper-button-next",
//   prevEl: ".swiper-button-prev",
// },
});
