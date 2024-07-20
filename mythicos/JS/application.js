$(document).ready(function() {
       $(".application").draggable({
           handle: ".draggable",
       });
       $(".application").click(function() {
              $(".application").removeClass("focus");
              $(this).addClass("focus");
       });
});