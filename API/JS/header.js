$(document).ready(function() {
       $('.header-button').on('click', function() {
              // does it have toggle?
              if ($(this).hasClass('toggle')) {
                     // if yes then remove class active
                     if ($(this).hasClass('active')) {
                            $(this).removeClass('active');
                     } else {
                            // if not then remove active from all and add to pressed one
                            $('.header-button.toggle').removeClass('active');
                            $(this).addClass('active');
                     }
              } else {
                     // if its not a toggle then remove active from all
                     $('.header-button.toggle').removeClass('active');
              }
       });
});
   
   
   