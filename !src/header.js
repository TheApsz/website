$(document).ready(function() {
       $('#features_sh').click(function() {
              $('#navbar_features').toggleClass('active');
       });
      
       let hoverTimeout;
       $('.navbar_open').hover(
              function() {
                  clearTimeout(hoverTimeout);
              },
              function() {
                  const isActive = $(this);
                  hoverTimeout = setTimeout(function() {
                      isActive.removeClass('active');
                  }, 3000);
              }
       );
});
   