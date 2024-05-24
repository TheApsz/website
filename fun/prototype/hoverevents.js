$(document).ready(function() {
       // Preload the audio files
       var hover = new Audio("sounds/hover.wav");
       var click = new Audio("sounds/click.wav");
       hover.preload = "auto";
       hover.volume = 0.25;
       click.preload = "auto";
       click.volume = 0.5;
   
       // Function to play the hover sound
       function playHoverSound() {
           var hoverInstance = new Audio("sounds/hover.wav");
           hoverInstance.volume = 0.25;
           hoverInstance.play();
       }
   
       // Function to play the click sound
       function playClickSound() {
           var clickInstance = new Audio("sounds/click.wav");
           clickInstance.volume = 0.5;
           clickInstance.play();
       }
   
       // Bind hover events to elements with class .int
       $(".int").hover(playHoverSound, function() {});
   
       // Bind click events to elements with class .int
       $(".int").on("click", function() {
           playClickSound();
       });
   });
   
$(document).ready(function() {
       var mstart = 0;
       var msettings = 0;
       var mguide = 0;

      $(".mstart").click(function() {
        mstart = (mstart === 0) ? 1 : 0;
          if (mstart) {
              msettings = 0;
              mguide = 0;
            $(".startitems").css("opacity", "1");
            $(".startitems").css("pointer-events", "auto");
            $(".startitems").css("translate", "0% 0%");
            // Hide the timeboxexpand when weatherboxexpand is clicked
            $(".settingsitems").css("opacity", "0");
            $(".settingsitems").css("pointer-events", "none");
            $(".settingsitems").css("translate", "10% 0%");

            $(".guideitems").css("opacity", "0");
            $(".guideitems").css("pointer-events", "none");
            $(".guideitems").css("translate", "10% 0%");
          } else {
            $(".startitems").css("opacity", "0");
            $(".startitems").css("pointer-events", "none");
            $(".startitems").css("translate", "10% 0%");
      }});
       $(".msettings").click(function() {
              msettings = (msettings === 0) ? 1 : 0;
       if (msettings) {
              mstart = 0;
              mguide = 0;
              $(".settingsitems").css("opacity", "1");
              $(".settingsitems").css("pointer-events", "auto");
              $(".settingsitems").css("translate", "0% 0%");
              // Hide the timeboxexpand when weatherboxexpand is clicked
              $(".startitems").css("opacity", "0");
              $(".startitems").css("pointer-events", "none");
              $(".startitems").css("translate", "10% 0%");

              $(".guideitems").css("opacity", "0");
              $(".guideitems").css("pointer-events", "none");
              $(".guideitems").css("translate", "10% 0%");
       } else {
              $(".settingsitems").css("opacity", "0");
              $(".settingsitems").css("pointer-events", "none");
              $(".settingsitems").css("translate", "10% 0%");
       }});

       $(".mguide").click(function() {
              mguide = (mguide === 0) ? 1 : 0;
                if (mguide) {
                     msettings = 0;
                     mstart = 0;
                  $(".guideitems").css("opacity", "1");
                  $(".guideitems").css("pointer-events", "auto");
                  $(".guideitems").css("translate", "0% 0%");
                  // Hide the timeboxexpand when weatherboxexpand is clicked
                  $(".startitems").css("opacity", "0");
                  $(".startitems").css("pointer-events", "none");
                  $(".startitems").css("translate", "10% 0%");
       
                  $(".settingsitems").css("opacity", "0");
                  $(".settingsitems").css("pointer-events", "none");
                  $(".settingsitems").css("translate", "10% 0%");
                } else {
                  $(".guideitems").css("opacity", "0");
                  $(".guideitems").css("pointer-events", "none");
                  $(".guideitems").css("translate", "10% 0%");
       }});
});
$(document).ready(function() {
       $('.start').on('click', function() {
           $('#black-screen').css('opacity', '1');
           
           let redirectUrl;
           if ($(this).hasClass('easy')) {
               redirectUrl = 'easy.html';
           } else if ($(this).hasClass('hard')) {
               redirectUrl = 'hard.html';
           }

           setTimeout(function() {
               window.location.href = redirectUrl;
           }, 3000); // 3000 milliseconds = 3 seconds
       });
});
   

       


