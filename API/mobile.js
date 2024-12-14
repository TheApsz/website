$(document).ready(function() {
       function updateClasses() {
              if ($(window).width() < 1100) {
                     $('.desktop').removeClass('desktop').addClass('mobile');
                     $('.mobile').show();
              } else {
                     $('.mobile').removeClass('mobile').addClass('desktop').hide();
              }
       }
   
       updateClasses();
       
       $(window).resize(updateClasses);
});
   