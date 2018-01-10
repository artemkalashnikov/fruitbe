$('.slider').slick({
	slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  dots: true,
  dotsClass: 'slider-dots',
    responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 886,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
});