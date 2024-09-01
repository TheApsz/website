$(function() {
       // Initialize variables to store the starting positions
       var startPosLeft, startPosTop;
   
       // Make the .drag element draggable
       $('.draggable').draggable({
           start: function(event, ui) {
               // Store the initial position of the parent .application
               var parent = $(this).closest('.application');
               startPosLeft = parent.position().left;
               startPosTop = parent.position().top;
           },
           drag: function(event, ui) {
               var parent = $(this).closest('.application');
               
               // Calculate the new position for the parent .application element
               var newLeft = startPosLeft + ui.position.left;
               var newTop = startPosTop + ui.position.top;
   
               // Ensure the parent does not overflow the right edge of the viewport
               if (newLeft + parent.outerWidth() > $(window).width()) {
                   newLeft = $(window).width() - parent.outerWidth();
               }
   
               // Ensure the parent does not overflow the bottom edge of the viewport
               if (newTop + parent.outerHeight() > $(window).height()) {
                   newTop = $(window).height() - parent.outerHeight();
               }
   
               // Ensure the parent does not overflow the left edge of the viewport
               if (newLeft < 0) {
                   newLeft = 0;
               }

               if (newTop < 0) {
                   newTop = 0;
               }
   
               parent.css({
                   left: newLeft,
                   top: newTop
               });
   
               ui.position.left = 0;
               ui.position.top = 0;
           }
       });
    $(document).on('click', '.close_button', function() {
        var $parentApp = $(this).closest('.application');
        $parentApp.removeClass('active').addClass('inactive');
    });
});


   
   
   