$(document).ready(function() {
       var $navbardec = $('#headerdecoration');
       var $navbar = $('.header');
     
       // Add a transition to the navbardec element
       $navbardec.css({
         transition: 'top 0.3s ease-out, left 0.3s ease-out, opacity 1s ease'
       });
     
       var animationFrameId = null;
     
       $navbar.hover(
         function() {
           // Mouse enter
           $(this).mousemove(function(e) {
             if (animationFrameId !== null) {
               window.cancelAnimationFrame(animationFrameId);
             }
             animationFrameId = window.requestAnimationFrame(function() {
               $navbardec.css({
                 left: e.pageX - $navbar.offset().left,
                 top: e.pageY - $navbar.offset().top
               });
             });
           });
         },
         function() {
           // Mouse leave
           $(this).off('mousemove');
           if (animationFrameId !== null) {
             window.cancelAnimationFrame(animationFrameId);
           }
        }
    );
});

$(document).ready(function() {
  var $mnavbar = $('.mobileheader');
  var $mobileHeaderSwitch = $('.mobileheaderswitch');
  var delayActive = false;

  $mnavbar.click(function() {
    if (!delayActive) {
      delayActive = true;
      $mnavbar.css('height', '50vmax');
      $mobileHeaderSwitch.css('opacity', '1');
      $mobileHeaderSwitch.css('pointer-events', 'auto');
      $('.mobileheader .items').css('opacity', '1');
      $('.mobileheader .items').css('transition', 'opacity 0.3s ease 0.5s');

      setTimeout(function() {
        $('.mobileheader .items').css('pointer-events', 'auto');
        delayActive = false; // Reset the flag
      }, 500);
    }
  });

  $mobileHeaderSwitch.click(function() {
    if (!delayActive) {
      $mnavbar.css('height', '10vmax');
      $mobileHeaderSwitch.css('opacity', '0');
      $mobileHeaderSwitch.css('pointer-events', 'none');

      $('.mobileheader .items').css('opacity', '0');
      $('.mobileheader .items').css('pointer-events', 'none');
      $('.mobileheader .items').css('transition', 'opacity 0.1s ease 0s');
    }
  });
});