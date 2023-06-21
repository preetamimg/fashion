// $('.card-carousel').owlCarousel({
//     loop:true,
//     margin:15,
//     nav:true,
//     dots:false,
//     // center:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
// })

// card carousel
$(document).ready(function () {
    (function ($) {
  $('.card-carousel').owlCarousel({
    items:8,
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    // navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        600:{
            items:2
        },
        768: {
            items:3
        },
        1000:{
            items:4
        }
    }
  })
  $( ".owl-prev").html('<img src="assets/img/index/owl-preview.svg" alt="client" class="h-100 w-100 img-fluid">');
   $( ".owl-next").html('<img src="assets/img/index/owl-next.svg" alt="client" class="h-100 w-100 img-fluid">');
  })(jQuery);
  });


// collection card
$(document).ready(function () {
    (function ($) {
  $('.collection-carousel').owlCarousel({
    items:8,
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    // navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  })
  $( ".owl-prev").html('<img src="assets/img/index/owl-preview.svg" alt="client" class="h-100 w-100 img-fluid">');
   $( ".owl-next").html('<img src="assets/img/index/owl-next.svg" alt="client" class="h-100 w-100 img-fluid">');
  })(jQuery);
  });