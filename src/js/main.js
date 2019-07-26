var $ = jQuery;//eslint-disable-line

$(document).ready(function() {

  var $slick = $('.slider'),
    $desktopNavigationLink = $('.navigation-link');

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
  $('#hamburger').on('click',function() {
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('is-open');
  });

  // Scroll to pages
  $desktopNavigationLink.click(function() {
    var margin = 0,
      id  = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - margin
    }, 1000);
  });
});
