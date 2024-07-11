$(document).ready(function() {
       $('#loginconfirm').click(function() {
              $('#background').removeClass('login');
              $('#login').addClass('pass');
              $('.loginwait').removeClass('loginwait').addClass('loginpass');
       });
});