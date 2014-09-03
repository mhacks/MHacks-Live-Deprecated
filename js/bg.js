colors = ['#B118AB', 
          '#56264D', 
          '#3A0122', 
          '#422172', 
          '#9a5305', 
          '#3677c7', 
          '#0d1d35', 
          '#2b0111', 
          '#082626', 
          '#0e1a4a', 
          '#190a0f', 
          '#15111b', 
          '#472942', 
          '#860b04', 
          '#552939', 
          '#07211a', 
          '#761634', 
          '#440139', 
          '#3c600a', 
          '#360a09', 
          '#2a3628'];

$(function() {
  // pick a random background
  var img = Math.floor(Math.random() * 21) + 1;
  COLOR = colors[img-1];
  $('.colorified').css('background-color', COLOR);
  var bg = '/img/poly/' + img +'.jpg';
  $('<img/>').attr('src', bg).load(function() {
    $(this).remove(); // prevent memory leaks as @benweet suggested
    $('body').css('background-image', 'url(' + bg + ')');
    $('#loading-curtain').addClass('hidden');
    viewportUnitsBuggyfill.refresh();
  });
});

