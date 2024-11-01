$(document).ready(function() {
       var $sections = $('#hotbar .bar > div'); // Select all direct children of .bar
       var currentIndex = 0;
   
       // Initially set the first section with clr-bg
       $sections.eq(currentIndex).addClass('active');
   
       // Listen to mouse wheel events
       $(window).on('wheel', function(event) {
           // Prevent default scrolling behavior
           event.preventDefault();
   
           // Determine the scroll direction
           if (event.originalEvent.deltaY > 0) {
               // Scrolling down
               currentIndex++;
               if (currentIndex >= $sections.length) {
                   currentIndex = 0; // Loop back to the first section
               }
           } else {
               // Scrolling up
               currentIndex--;
               if (currentIndex < 0) {
                   currentIndex = $sections.length - 1; // Loop back to the last section
               }
           }
   
           // Update the background color for the active section
           $sections.removeClass('active');
           $sections.eq(currentIndex).addClass('active');
       });
   });