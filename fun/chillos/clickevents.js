$(document).ready(function() {
       var weatherexpand = 0;
       var timeboxexpand = 0;
     
       $("#weatherboxexpand, #timeboxexpand").css("opacity", "0");
       $("#weatherboxexpand, #timeboxexpand").css("scale", "0.9");
       $("#weatherboxexpand, #timeboxexpand").css("translate", "0% 25%");

      $("#weatherbox").click(function() {
        weatherexpand = (weatherexpand === 0) ? 1 : 0;
          if (weatherexpand) {
              timeboxexpand = 0;
            $("#weatherboxexpand").css("opacity", "1");
            $("#weatherboxexpand").css("scale", "1");
            $("#weatherboxexpand").css("translate", "0% 0%");
            // Hide the timeboxexpand when weatherboxexpand is clicked
            $("#timeboxexpand").css("opacity", "0");
            $("#timeboxexpand").css("scale", "0.9");
            $("#timeboxexpand").css("translate", "0% 25%");
          } else {
            $("#weatherboxexpand").css("opacity", "0");
            $("#weatherboxexpand").css("scale", "0.9");
            $("#weatherboxexpand").css("translate", "0% 25%");
      }});
      $("#timebox").click(function() {
       timeboxexpand = (timeboxexpand === 0) ? 1 : 0;
         if (timeboxexpand) {
              weatherexpand = 0;
           $("#timeboxexpand").css("opacity", "1");
           $("#timeboxexpand").css("scale", "1");
           $("#timeboxexpand").css("translate", "0% 0%");
           // Hide the timeboxexpand when weatherboxexpand is clicked
           $("#weatherboxexpand").css("opacity", "0");
           $("#weatherboxexpand").css("scale", "0.9");
           $("#weatherboxexpand").css("translate", "0% 25%");
         } else {
           $("#timeboxexpand").css("opacity", "0");
           $("#timeboxexpand").css("scale", "0.9");
           $("#timeboxexpand").css("translate", "0% 25%");
     }});
});