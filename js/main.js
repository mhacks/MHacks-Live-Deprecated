// Document ready
$(function() {

  // Set a timeout...
    setTimeout(function(){
        // Hide the address bar!
        window.scrollTo(0, 1);
    }, 0);

  // initialize Parse
  Parse.initialize("RsI9Hn7jETLPOpYv20gfdN6MaIB1MkEsIs26zqih", "ettyekyxh6UtHnColhHgS5vTZ87Dtqw1PsijHiU0");

  initialize();
  viewportUnitsBuggyfill.refresh();
});


function fixNavWidth() {
  // $('body').css('height', $('#fixed-footer').offset().top - $('#fixed-header').offset().top);
  $('nav').affix({
    offset: {
      top: function() { return $('#main-container').offset().top }
    }
  });
  var offset = getNavOffset();
  $('section#faq').css('margin-top', offset + "px")
  $('#main-container').css('margin-top', "-" + offset + "px");
  $('#main-nav').width($('#main-container').outerWidth());
  viewportUnitsBuggyfill.refresh();
}

function getNavOffset() {
  // return $('#main-nav').innerHeight() + $('.navbar-header').innerHeight();
  var offset = 0;
  if ($('.navbar-header').height() === 0)
    offset = $('#main-nav').height();
  else offset = $('.navbar-header').height();
  return offset;
}

// Reset the drawing before starting
function resetPathDrawing(path) {
  // we need to hardcode the lengths because of Firefox
  length = $(path).attr('length');
  // Clear any previous transition
  path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 
  'none';
  // Set up the starting positions
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  return length;
};

// GOOGLE MAPS
function getMapStyle() {
  return [
    {
      stylers: [
        { hue: COLOR },
        { saturation: -20 },
        { lightness: -20 }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
}

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(42.291910, -83.715832),
    zoom: 14,
    draggable: false,
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
    styles: getMapStyle()
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
}
