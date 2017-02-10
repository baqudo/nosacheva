// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

$('.reward-slider').slick({
  arrow: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 981,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 701,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '33%',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1
      }
    }
  ]
});