$(document).ready(function() {
  $('.slider-wrapper').slick({
    centerMode: true,
    centerPadding: '182px',
    slidesToShow: 1,
    prevArrow: $('.prev-slide'),
    nextArrow: $('.next-slide'),
    responsive: [
   {
     breakpoint: 1200,
     settings: {
       arrows: false,
       centerMode: true,
       centerPadding: '40px',
       slidesToShow: 1,
     }
   },
   {
     breakpoint: 768,
     settings: {
       arrows: false,
       centerMode: true,
       centerPadding: '40px',
       slidesToShow: 1,
     }
   },
   {
     breakpoint: 480,
     settings: {
       arrows: false,
       centerMode: true,
       centerPadding: '1px',
       slidesToShow: 1
     }
   }
 ]
  });
});
