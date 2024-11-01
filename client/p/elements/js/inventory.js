$(document).keydown(function(e) {
       if (e.key === "e" && !$("input#chat-input").is(":focus")) {
         $("#inventory").toggleClass("active");
       }
});