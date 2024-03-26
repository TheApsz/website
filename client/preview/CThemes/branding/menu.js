$(document).ready(function() {
       // Variable to store toggle state (0 - hidden, 1 - visible)
       var msettings = 0;
     
       // Set initial right margin for the settings box
       $(".msettings").css("right", "1vmax");
     
       $("#msettings").click(function() {
         // Toggle visibility based on current state
              msettings = (msettings === 0) ? 1 : 0;
     
         // Update right margin based on toggle state
       if (msettings) {
              $(".msettings").css("right", "1.5vmax");
       } else {
              $(".msettings").css("right", "-35vmax");
       }});

       const slider = document.getElementById("chunks");
const sliderValueElement = document.querySelector(".slidercalc");

const intervals = [ // Define interval ranges
  { min: 8, max: 24, text: "Potato" },
  { min: 25, max: 56, text: "Low" },
  { min: 57, max: 96, text: "Medium" },
  { min: 97, max: 128, text: "High" }
];

slider.step = 8; // Adjust based on your intervals

slider.addEventListener("input", function() {
  const value = parseInt(slider.value); // Convert value to integer
  let intervalText = ""; // Initialize text

  for (const interval of intervals) {
    if (value >= interval.min && value <= interval.max) {
      intervalText = interval.text;
      break; // Exit loop after finding the matching interval
    }
  }

  sliderValueElement.textContent = value + " Chunks" + " (" + intervalText + ")";
});
});
