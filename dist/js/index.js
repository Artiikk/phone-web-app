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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgJCgnLnNsaWRlci13cmFwcGVyJykuc2xpY2soe1xuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgY2VudGVyUGFkZGluZzogJzE4MnB4JyxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgcHJldkFycm93OiAkKCcucHJldi1zbGlkZScpLFxuICAgIG5leHRBcnJvdzogJCgnLm5leHQtc2xpZGUnKSxcbiAgICByZXNwb25zaXZlOiBbXG4gICB7XG4gICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgIHNldHRpbmdzOiB7XG4gICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcbiAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgIH1cbiAgIH0sXG4gICB7XG4gICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgc2V0dGluZ3M6IHtcbiAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgfVxuICAgfSxcbiAgIHtcbiAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICBzZXR0aW5nczoge1xuICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICBjZW50ZXJQYWRkaW5nOiAnMXB4JyxcbiAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgfVxuICAgfVxuIF1cbiAgfSk7XG59KTtcbiJdLCJmaWxlIjoiaW5kZXguanMifQ==
