import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import $ from 'jquery';
import slick from 'slick-carousel';
import uikitCss from 'uikit/dist/css/uikit.css';
import slickCss from 'slick-carousel/slick/slick.css';
import Leaflet from 'leaflet/dist/leaflet.js';
import LeafletCss from 'leaflet/dist/leaflet.css';

UIkit.use(Icons);

$(document).ready(function() {
  var mymap = Leaflet.map('map').setView([50.786394, 21.462547], 10);
  Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF3ZWx0YXIiLCJhIjoiY2oycTBxd2F6MDJwNTJybWg4b3g1Y2lqcSJ9.GI_6RfChSTz01THupQNBlQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.outdoors',
    accessToken: 'pk.eyJ1IjoicGF3ZWx0YXIiLCJhIjoiY2oycTBxd2F6MDJwNTJybWg4b3g1Y2lqcSJ9.GI_6RfChSTz01THupQNBlQ'
}).addTo(mymap);

this.customDefault = Leaflet.icon({
		iconUrl: 'images/leaflet/marker-icon.png',
		shadowUrl: 'images/leaflet/marker-shadow.png',
	});

var marker = Leaflet.marker([50.786394, 21.462547], { icon: this.customDefault }).addTo(mymap);

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
