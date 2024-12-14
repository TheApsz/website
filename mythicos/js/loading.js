$(document).ready(function() {
       if ($('#loading').hasClass('active')) {
              setTimeout(function() {
                     $('#loading').removeClass('active').addClass('inactive');
              }, 1000);
       }
});
     