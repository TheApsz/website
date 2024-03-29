$(document).ready(function() {
       // Variable to store toggle state (0 - hidden, 1 - visible)
       var msettings = 0;
     
       // Set initial right margin for the settings box
       $(".msettings").css("right", "-35vmax");
     
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

$(document).ready(function() {
  $("#mpotato").click(function() {
    // Set all elements with #m2potato to inactive first
    $(this).css({"box-shadow": "inset 0px 0px 0px 0.1vmax var(--pri)"});
    $("#mlow").css({"box-shadow": ""});
    $("#mmedium").css({"box-shadow": ""});
    $("#mhigh").css({"box-shadow": ""});

    $(".aaoff").removeClass("inactive").addClass("active");
    $(".aasmaa").removeClass("active").addClass("inactive");
    $(".aataa").removeClass("active").addClass("inactive");
    $(".aatxaa").removeClass("active").addClass("inactive");

    $(".soff").removeClass("inactive").addClass("active");
    $(".smed").removeClass("active").addClass("inactive");
    $(".smhi").removeClass("active").addClass("inactive");
    $(".srt").removeClass("active").addClass("inactive");

    $(".vlow").removeClass("inactive").addClass("active");
    $(".vhi").removeClass("active").addClass("inactive");

    $(".tlow").removeClass("inactive").addClass("active");
    $(".thigh").removeClass("active").addClass("inactive");

    $(".shex").removeClass("active").addClass("inactive");
    $(".shok").removeClass("inactive").addClass("active");

    $(".thgr").removeClass("inactive").addClass("active");
    $(".thyu").removeClass("active").addClass("inactive");
  });
  $("#mlow").click(function() {
    // Set all elements with #m2potato to inactive first
    $(this).css({"box-shadow": "inset 0px 0px 0px 0.1vmax var(--pri)"});
    $("#mpotato").css({"box-shadow": ""});
    $("#mmedium").css({"box-shadow": ""});
    $("#mhigh").css({"box-shadow": ""});

    $(".aaoff").removeClass("active").addClass("inactive");
    $(".aasmaa").removeClass("inactive").addClass("active");
    $(".aataa").removeClass("active").addClass("inactive");
    $(".aatxaa").removeClass("active").addClass("inactive");

    $(".soff").removeClass("active").addClass("inactive");
    $(".smed").removeClass("inactive").addClass("active");
    $(".smhi").removeClass("active").addClass("inactive");
    $(".srt").removeClass("active").addClass("inactive");

    $(".vlow").removeClass("inactive").addClass("active");
    $(".vhi").removeClass("active").addClass("inactive");

    $(".tlow").removeClass("inactive").addClass("active");
    $(".thigh").removeClass("active").addClass("inactive");

    $(".shex").removeClass("active").addClass("inactive");
    $(".shok").removeClass("inactive").addClass("active");

    $(".thgr").removeClass("inactive").addClass("active");
    $(".thyu").removeClass("active").addClass("inactive"); 
  });
  $("#mmedium").click(function() {
    // Set all elements with #m2potato to inactive first
    $(this).css({"box-shadow": "inset 0px 0px 0px 0.1vmax var(--pri)"});
    $("#mpotato").css({"box-shadow": ""});
    $("#mlow").css({"box-shadow": ""});
    $("#mhigh").css({"box-shadow": ""});

    $(".aaoff").removeClass("active").addClass("inactive");
    $(".aasmaa").removeClass("active").addClass("inactive");
    $(".aataa").removeClass("inactive").addClass("active");
    $(".aatxaa").removeClass("active").addClass("inactive");

    $(".soff").removeClass("active").addClass("inactive");
    $(".smed").removeClass("inactive").addClass("active");
    $(".smhi").removeClass("active").addClass("inactive");
    $(".srt").removeClass("active").addClass("inactive");

    $(".vlow").removeClass("inactive").addClass("active");
    $(".vhi").removeClass("active").addClass("inactive");

    $(".tlow").removeClass("inactive").addClass("active");
    $(".thigh").removeClass("active").addClass("inactive");

    $(".shex").removeClass("active").addClass("inactive");
    $(".shok").removeClass("inactive").addClass("active");

    $(".thgr").removeClass("active").addClass("inactive");
    $(".thyu").removeClass("inactive").addClass("active"); 
  });
  $("#mhigh").click(function() {
    // Set all elements with #m2potato to inactive first
    $(this).css({"box-shadow": "inset 0px 0px 0px 0.1vmax var(--pri)"});
    $("#mpotato").css({"box-shadow": ""});
    $("#mlow").css({"box-shadow": ""});
    $("#mmedium").css({"box-shadow": ""});

    $(".aaoff").removeClass("active").addClass("inactive");
    $(".aasmaa").removeClass("active").addClass("inactive");
    $(".aataa").removeClass("active").addClass("inactive");
    $(".aatxaa").removeClass("inactive").addClass("active");

    $(".soff").removeClass("active").addClass("inactive");
    $(".smed").removeClass("active").addClass("inactive");
    $(".smhi").removeClass("inactive").addClass("active");
    $(".srt").removeClass("active").addClass("inactive");

    $(".vlow").removeClass("active").addClass("inactive");
    $(".vhi").removeClass("inactive").addClass("active");

    $(".tlow").removeClass("inactive").addClass("active");
    $(".thigh").removeClass("active").addClass("inactive");

    $(".shex").removeClass("inactive").addClass("active");
    $(".shok").removeClass("active").addClass("inactive");

    $(".thgr").removeClass("active").addClass("inactive");
    $(".thyu").removeClass("inactive").addClass("active"); 
  });
});
