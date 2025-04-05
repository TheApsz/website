$(document).ready(function() {
    $('#menuBox .button').click(function() {
      const $this = $(this);
  
      if ($this.hasClass('active')) {
        // Already active: remove after small delay
        setTimeout(() => {
          $this.removeClass('active');
          $('#menuBoxBig').removeClass('active');
          console.log('Menu & button OFF');
        }, 10);
      } else {
        // Deactivate all buttons
        $('#menuBox .button').removeClass('active');
  
        // Activate the clicked one
        $this.addClass('active');
        $('#menuBoxBig').addClass('active');
        console.log('Menu & button ON');
      }
    });
  });
  
  
  
  
  
  

$(document).ready(function() {
    $('#debugBorder').click(function() {
        // Toggle active class on the button
        $(this).toggleClass('active');
      
        if ($(this).hasClass('active')) {
            $('html').css('--Debug-border', 'solid 1px purple');
            console.log('DebugBorder ON');
        } else {
            $('html').css('--Debug-border', '0');
            console.log('DebugBorder OFF');
        }
    });
    $('#graphicAmoled').click(function() {
        // Toggle active class on the button
        $(this).toggleClass('active');
      
        if ($(this).hasClass('active')) {
            $('html').css('--bg', 'rgba(0,0,0,1)');
            console.log('Amoled ON');
        } else {
            $('html').css('--bg', '');
            console.log('Amoled OFF');
        }
    });
    $('#graphicSMFont').click(function() {
        // Toggle active class on the button
        $(this).toggleClass('active');
      
        if ($(this).hasClass('active')) {
            $('html').css('--fontRender', 'geometricPrecision');
            console.log('SmoothFont ON');
        } else {
            $('html').css('--fontRender', '');
            console.log('SmoothFont OFF');
        }
    });
});

  $(document).ready(function() {
    // When any button starting with #sh- is clicked
    $('[id^="sh-"]').click(function() {
      // Get the target ID (e.g., "play" from "sh-play")
      var target = this.id.split('-')[1]; 
      // Construct the target selector (e.g., "#playSelect")
      var targetSelector = '#' + target + 'Select';
      
      // Remove 'active' from all possible targets
      $('[id$="Select"]').removeClass('active');
      // Add 'active' to the clicked button's target
      $(targetSelector).addClass('active');
      
      // Optional: Also toggle active on the button itself
      $('[id^="sh-"]').removeClass('active');
      $(this).addClass('active');
    });
  });