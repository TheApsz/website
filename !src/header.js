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
  var $mnavbar = $('.header.mobile');
  var toggle = false;

  $mnavbar.click(function() {
    if (!toggle) {
      toggle = true;
      $mnavbar.css('height', '340px');
      $("#nav.mobile > h1").css('opacity', '1');
    } else {
      toggle = false;
      $mnavbar.css('height', '');
      $("#nav.mobile > h1").css('opacity', '');
    }
  });  
});