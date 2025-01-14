$(document).ready(function() {
       $('.about-card').hover(
           function(event) {
               // Mouse enters the about-card
               $(this).addClass('hovered');
           },
           function() {
               // Mouse leaves the about-card
               $(this).removeClass('hovered');
           }
       );
   
       $('.about-card').mousemove(function(event) {
           // Update the position of the :before pseudo-element
           const offset = $(this).offset();
           const x = event.pageX - offset.left - 5; // Adjust for half the width of the pseudo-element
           const y = event.pageY - offset.top - 5; // Adjust for half the height of the pseudo-element
   
           $(this).css('--mouse-x', x + 'px');
           $(this).css('--mouse-y', y + 'px');
       });
   });
   
     
     