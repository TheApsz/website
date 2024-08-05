$(document).ready(function() {
       $('.griditem1').mousemove(function(event) {
           let parentOffset = $(this).offset(); 
           let relX = event.pageX - parentOffset.left;
           let relY = event.pageY - parentOffset.top;
   
           $(this).find('.decoration').css({
               left: relX + 10 + 'px', // Offset to position the decoration near the cursor
               top: relY + 10 + 'px'
           });
       });
   });