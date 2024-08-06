$(document).ready(function() {
       $('#startmenush').click(function() {
           $('#startmenu').toggleClass('active inactive');
       });
   
       $('#startmenu .controls span').click(function() {
           $(this).toggleClass('active');
       });
   
       let hoverTimeout;
       $('#startmenu').hover(
           function() {
               clearTimeout(hoverTimeout);
           },
           function() {
               const isActive = $(this);
               hoverTimeout = setTimeout(function() {
                   isActive.removeClass('active').addClass('inactive');
               }, 3000); // 3000 milliseconds = 3 seconds
           }
       );
});
   $(document).ready(function() {
       function decreaseBattery() {
           // Get the current battery value
           let battery = parseInt($('#battery').text().replace('%', ''));
           
           // Decrease the battery by 1 if it is greater than 0
           if (battery > 0) {
               battery -= 1;
               $('#battery').text(`${battery}%`);
           }
       }
   
       // Decrease the battery every minute (60000 milliseconds)
       setInterval(decreaseBattery, 60000);
       
       // Initial update
       decreaseBattery();
   });