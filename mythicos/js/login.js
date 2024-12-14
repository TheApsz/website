$(document).ready(function() {
       $('#login-question').on('click', function() {
              $('#login-answer').toggleClass('window-active window-inactive');
       });

       $('#login-continue').on('click', function() {
              $('#login').removeClass('active').addClass('inactive');
              $('#background').removeClass('inactive').addClass('active');
       });   
});