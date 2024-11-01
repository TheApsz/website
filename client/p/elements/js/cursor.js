$(document).ready(function(){
       let mouseX = 0, mouseY = 0;
       let cursorX = 0, cursorY = 0;
       const delay = 8; // Higher value means slower delay

       // Update mouse coordinates on mousemove
       $(document).mousemove(function(e) {
           mouseX = e.pageX;
           mouseY = e.pageY;
       });

       function animateCursor() {
           // Smooth follow logic, gradually moving the #cursor towards the mouse
           cursorX += (mouseX - cursorX) / delay;
           cursorY += (mouseY - cursorY) / delay;

           // Apply new position to the #cursor element
           $("#cursor").css({
               left: cursorX + "px",
               top: cursorY + "px"
           });

           // Keep the animation going
           requestAnimationFrame(animateCursor);
       }

       // Start the animation loop
       animateCursor();

       // Add hover effect for scaling the #cursor on hover over .hoverable
       $('.hoverable').hover(
           function() {
               $("#cursor").css('transform', 'scale(0.5)'),
               $("#cursor").css('background', 'var(--pri)');
           },
           function() {
               $("#cursor").css('transform', ''),
               $("#cursor").css('background', '');
           }
       );

       $(document).mousedown(function(e) {
              if (e.which === 1) { // Left mouse button
                  $("#cursor").css('scale', '1.5');
              }
          });

          // Revert scale when the mouse button is released
          $(document).mouseup(function(e) {
              if (e.which === 1) { // Left mouse button
                  $("#cursor").css('scale', '');
              }
          });
   });