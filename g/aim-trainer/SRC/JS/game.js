$(document).ready(function () {
    // Handle all playSelect buttons
    $('[id^="playSelect"]').on('click', function () {
      const id = $(this).attr('id');
  
      // Extract the number using regex
      const match = id.match(/playSelect(\d+)/);
      if (!match) return; // no number found, exit
  
      const difficulty = match[1]; // e.g., "1", "2", "3"
  
      // Remove .active from #menu
      $('#menu').removeClass('active');
  
      // Clear any previous dif-* and active
      $('#game')
        .removeClass(function (index, className) {
          return (className.match(/dif-\d+/g) || []).join(' ');
        })
        .removeClass('dif-off active')
        .addClass(`dif-${difficulty} active`);
    });
  
    // Handle Escape key
    $(document).on('keydown', function (e) {
      if (e.key === 'Escape' || e.keyCode === 27) {
        const $game = $('#game');
        if ($game.hasClass('active')) {
          $game
            .removeClass(function (index, className) {
              return (className.match(/dif-\d+/g) || []).join(' ');
            })
            .removeClass('active')
            .addClass('dif-off');
  
          // Show menu again
          $('#menu').addClass('active');
        }
      }
    });
  });