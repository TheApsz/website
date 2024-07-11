$(document).ready(function() {
       let hoverTimeout;

       $('#taskbar2').hover(
           function() {
               clearTimeout(hoverTimeout);
               $(this).removeClass('inactive').addClass('active');
           },
           function() {
               hoverTimeout = setTimeout(() => {
                   $(this).removeClass('active').addClass('inactive');
               }, 2000);
           }
       );
   });