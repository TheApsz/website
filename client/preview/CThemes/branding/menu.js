$(document).ready(function() {
  $('.singleplayer').click(function() {
      $('#singleplayer').toggleClass('off on');
      $('#multiplayer').addClass('off').removeClass('on');
      $('#mainmenu').addClass('skibidi').removeClass('not-skibidi');
      // Check if every element is off
      if ($('#singleplayer').hasClass('off') && $('#multiplayer').hasClass('off')) {
          $('#mainmenu').removeClass('skibidi').addClass('not-skibidi');
      }
  });

  $('.multiplayer').click(function() {
      $('#multiplayer').toggleClass('off on');
      $('#singleplayer').addClass('off').removeClass('on');
      $('#mainmenu').addClass('skibidi').removeClass('not-skibidi');
      // Check if every element is off
      if ($('#singleplayer').hasClass('off') && $('#multiplayer').hasClass('off')) {
          $('#mainmenu').removeClass('skibidi').addClass('not-skibidi');
      }
  });

  $('.realm').click(function() {
    $('#notification').css('animation', 'notification 5s');
  });
});