$(document).ready(function() {
       $(document).on('contextmenu', function(e) {
           e.preventDefault();
           
           const $menu = $('#quick_menu');
           
           let posX = e.pageX;
           let posY = e.pageY;
           
           // Ensure the menu does not overflow the right edge of the viewport
           if (posX + $menu.outerWidth() > $(window).width()) {
               posX = $(window).width() - $menu.outerWidth();
           }
           
           // Ensure the menu does not overflow the bottom edge of the viewport
           if (posY + $menu.outerHeight() > $(window).height()) {
               posY = $(window).height() - $menu.outerHeight();
           }
           
           $menu.css({
               left: posX,
               top: posY
           }).addClass('show');
       });
   
       $(document).on('click', function() {
              $('#quick_menu').removeClass('show');
       });
});