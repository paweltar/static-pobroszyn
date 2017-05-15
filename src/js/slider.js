import $ from 'jquery';
import slick from 'slick-carousel';
import slickCss from 'slick-carousel/slick/slick.css';

$(document).ready(function() {
$('.gallery__slides').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      infinite: true,
      draggable: true,
      prevArrow: '.slidenav--left',
      nextArrow: '.slidenav--right',
      speed: 600,
      cssEase: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)'
    });
});
