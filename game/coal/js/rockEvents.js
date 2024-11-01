$(document).ready(function() {
       $('#clicker-object').on('click', function() {
           $(this).css('transform', 'scale(1.2)');
   
           setTimeout(() => {
               $(this).css('transform', 'scale(1)');
           }, 100);
       });
});