$(document).ready(function() {

  $('.singleplayer').click(function() {
    $('#singleplayer').toggleClass('off on');
    $('#multiplayer').addClass('off').removeClass('on');
    $('#settings').addClass('off').removeClass('on');
    $('#accounts').addClass('off').removeClass('on');
    $('#mainmenu').addClass('skibidi').removeClass('not-skibidi');
    
    if ($('#singleplayer').hasClass('off')) {
      $('#mainmenu').removeClass('skibidi').addClass('not-skibidi');
    }
  });

  // Click handler for multiplayer button (similar structure)
  $('.multiplayer').click(function() {
    $('#multiplayer').toggleClass('off on');

    $('#singleplayer').addClass('off').removeClass('on');
    $('#settings').addClass('off').removeClass('on');
    $('#accounts').addClass('off').removeClass('on');
    $('#mainmenu').addClass('skibidi').removeClass('not-skibidi');
    
    if ($('#multiplayer').hasClass('off')) {
      $('#mainmenu').removeClass('skibidi').addClass('not-skibidi');
    }
  });

  // Click handler for settings button (similar structure)
  $('.settings').click(function() {
    $('#settings').toggleClass('off on');
    $('#singleplayer').addClass('off').removeClass('on');
    $('#multiplayer').addClass('off').removeClass('on');
    $('#accounts').addClass('off').removeClass('on');
    $('#mainmenu').addClass('skibidi').removeClass('not-skibidi');
    
    if ($('#settings').hasClass('off')) {
      $('#mainmenu').removeClass('skibidi').addClass('not-skibidi');
    }
  });

  // Click handler for accounts button (similar structure)
  $('.accounts').click(function() {
    $('#accounts').toggleClass('off on');
    $('#singleplayer').addClass('off').removeClass('on');
    $('#multiplayer').addClass('off').removeClass('on');
    $('#settings').addClass('off').removeClass('on');
    $('#mainmenu').addClass('skibidi').removeClass('not-skibidi');
    
    if ($('#accounts').hasClass('off')) {
      $('#mainmenu').removeClass('skibidi').addClass('not-skibidi');
    }
  });

  // Click handler for realm button (unchanged)
  $('.realm').click(function() {
    $('#notification').css('animation', 'notification 5s');
  });
});

$(document).ready(function() {
  var fovSlider = $('#fov');
  var fovText = $('.fov');
  var fpsSlider = $('#fps');
  var fpsText = $('.fps');
  // all of this caches the sliders

  fovSlider.on('input', function() {
    fovText.text($(this).val());
  });
  fpsSlider.on('input', function() {
    fpsText.text($(this).val());
  });
  // may 31 not the most efficient way but it works
  // june 14 doesnt work firefox*
});
