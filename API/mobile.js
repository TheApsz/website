$(document).ready(function() {
       // i should probably write a more optimised code
       function updateClasses() {
              // if horizontal value is lower then 1000 then remove class
              // FIX - laptops show mobile page content
              // it still does and i have no idea how to fix it
              if ($(window).width() < 1100) {
                     $('.desktop').removeClass('desktop').addClass('mobile');
                     $('.mobile').show();
              } else {
                     $('.mobile').removeClass('mobile').addClass('desktop').hide();
              }
       }

       // this almost fucked up the live server
       updateClasses();
       
       $(window).resize(updateClasses);
});