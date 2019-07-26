$(document).ready(function() {//eslint-disable-line

  var $slick = $('.slider');//eslint-disable-line

  $slick.slick({
    dots: true,
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<span class="btn-prev"></span>',
    nextArrow: '<span class="btn-next"></span>'
  });

  //hamburger-menu
  $('#hamburger').on('click',function() {//eslint-disable-line
    $(this).toggleClass('open');//eslint-disable-line
    $('.mobile-menu').toggleClass('is-open')//eslint-disable-line
  });


});
