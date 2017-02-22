// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include jquery.countdown.js
//=include flipclock.js

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

$('.js-payment').on("click", function(event) {

    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top - 50;
    //анимируем переход на расстояние - top за 1600 мс
    $('body,html').animate({scrollTop: top}, 1600);
});

var dateTime = 3600 * 24 * 3;

$(function () {
  var clock = $('#clock').FlipClock(dateTime, {
    clockFace : 'DailyCounter',
    countdown: true
  });
});