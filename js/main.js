$(function () {

  $(".slider__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider__inner2",
  });

  $(".slider__inner2").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".slider__inner",
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 2,
        }
      }




    ]

  });


  $('.header__menu-btn').on('click ', function () {
    $('.header__menu ul').slideToggle();
  });


});
