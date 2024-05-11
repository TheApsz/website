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