$(document).ready(function () {
    $("#login-forgot").on("click", function () {
        $("#hint").toggleClass("active");
    });
});

$('#login-input').on('keydown', function(e) {
    if (e.key === 'Enter') {
      const inputVal = $(this).val().trim();
      if (inputVal === 'password :3') {
        $('#login').removeClass('loaded');
        $('#background').addClass('active');
      } else {
        $(this).addClass('wrong');
      }
    }
  });

  $('#login-input').on('click', function() {
    $(this).removeClass('wrong');
  });