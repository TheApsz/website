$(document).ready(function () {
    $(".button").on("click", function () {
      var audio = new Audio("./desktop/audio/button.mp3");
      audio.play();
    });
});