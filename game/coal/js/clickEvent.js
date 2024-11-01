// clickEvent.js

$(document).ready(function() {
       // Initial score display
       updateScoreDisplay();
   
       // Click event for the clicker object
       $('#clicker-object').on('click', function() {
           score += (1 + pickaxeLevel); // Increment score by 1 plus pickaxe level
           updateScoreDisplay(); // Update score display
       });
   });
   
   