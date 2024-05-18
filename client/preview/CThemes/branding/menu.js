$(document).ready(function() {

  // Click handler for singleplayer button
  $('.singleplayer').click(function() {
    $('#singleplayer').toggleClass('off on'); // Toggle classes on clicked element (singleplayer)
    $('#multiplayer').addClass('off').removeClass('on'); // Set multiplayer to off
    $('#settings').addClass('off').removeClass('on');  // Set settings to off (new)
    $('#accounts').addClass('off').removeClass('on');  // Set accounts to off (new)
    $('#mainmenu').addClass('skibidi').removeClass('not-skibidi'); // Show main menu
    
    // Check if all menu buttons are off (singleplayer, multiplayer, settings, accounts)
    if ($('#singleplayer').hasClass('off')) {  // Use class for all buttons
      $('#mainmenu').removeClass('skibidi').addClass('not-skibidi'); // Hide main menu
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
  // Cache the slider and text element for performance
  var fovSlider = $('#fov');
  var fovText = $('.fov');
  var fpsSlider = $('#fps');
  var fpsText = $('.fps');

  // Update text on slider change
  fovSlider.on('input', function() {
    fovText.text($(this).val()); // Set text to slider value
  });
  fpsSlider.on('input', function() {
    fpsText.text($(this).val()); // Set text to slider value
  });
});
