$(document).keydown(function(e) {
       if (e.originalEvent.code === "ShiftRight" && !$("input#chat-input").is(":focus")) {
         $("#clickgui").toggleClass("active");
       }
});

$(document).ready(function() {
       var startTime = new Date().getTime();
       var playTime = 0;
       var intervalId = setInterval(function() {
         var currentTime = new Date().getTime();
         var timeDiff = currentTime - startTime;
         playTime = timeDiff;
         var hours = Math.floor(playTime / 3600000);
         var minutes = Math.floor((playTime % 3600000) / 60000);
         var seconds = Math.floor((playTime % 60000) / 1000);
         var milliseconds = playTime % 1000;
         var currentTime = new Date();
         var hours12 = currentTime.getHours() % 12;
         if (hours12 === 0) hours12 = 12;
         var ampm = currentTime.getHours() < 12 ? "AM" : "PM";
         var currentTimeString = String(hours12).padStart(2, '0') + ":" + String(currentTime.getMinutes()).padStart(2, '0') + " " + ampm;
         var playTimeString = String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0') + ":" + String(milliseconds).padStart(3, '0');
         if (hours >= 2) {
           clearInterval(intervalId);
           $("#playtime").text("Stop playing!");
         } else {
           $("#time").text(currentTimeString);
           $("#playtime").text(playTimeString);
         }
<<<<<<< HEAD
       }, 100);
=======
       }, 1);
>>>>>>> 3a2b33c (client preview updated and apsz profile)
});
     
     
     
     