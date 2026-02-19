$('.center').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 320,
      settings: {
       dots: false,
        infinite: false,
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
      }
    },
  ]
});