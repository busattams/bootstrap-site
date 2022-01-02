$(document).ready(function() {

   $('#homepage-slider').slick({
      arrows: false,
      dots: true,
   });

   $('#portfolio-slider').slick({
      centerMode: true,
      centerPadding: '15vw',
      slidesToShow: 1,

      arrows: false,
      dots: true,
      // responsive: [
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       arrows: false,
      //       centerMode: true,
      //       centerPadding: '40px',
      //       slidesToShow: 3
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       arrows: false,
      //       centerMode: true,
      //       centerPadding: '40px',
      //       slidesToShow: 1
      //     }
      //   }
      // ]
    });



 });