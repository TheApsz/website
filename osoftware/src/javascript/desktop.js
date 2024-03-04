$(document).ready(function(){
    var state = 1;  // Counter to track the state
    var powerstage = 1;  // Counter to track the state
    var profilestage = 1;  // Counter to track the state
    var programedge = 1;
    $("#main").click(function(){
        if (state === 1) {
            // For state 1, set left to 1vmax
            $(".quickpage").css("left", "-20vmax");
            $(".poweroff").css("opacity", "0");
            $(".poweroff").css("scale", "0");
            $(".profile").css("opacity", "0");
            $(".profile").css("scale", "0");
            state++;
            powerstage = 2;
            profilestage = 2;
        } else if (state === 2) {
            // For state 2, set left to -20vmax
            $(".quickpage").css("left", "0.25vmax");
            state = 1;
        }
    });
    $(".quickpagepower").click(function(){
        if (powerstage === 1) {
            // For state 1, set left to 1vmax
            $(".poweroff").css("opacity", "0");
            $(".poweroff").css("scale", "0");
            powerstage++;
        } else if (powerstage === 2) {
            // For state 2, set left to -20vmax
            $(".poweroff").css("opacity", "1");
            $(".poweroff").css("scale", "1");
            powerstage = 1;
        }
    });
    $(".quickpageprofileprofile").click(function(){
        if (profilestage === 1) {
            // For state 1, set left to 1vmax
            $(".profile").css("opacity", "0");
            $(".profile").css("scale", "0");
            profilestage++;
        } else if (profilestage === 2) {
            // For state 2, set left to -20vmax
            $(".profile").css("opacity", "1");
            $(".profile").css("scale", "1");
            profilestage = 1;
        }
    });
    $(".edgeshortcut").click(function(){
        if (programedge === 1) {
            // For state 1, set left to 1vmax
            $(".quickpage").css("left", "-20vmax");
            $(".poweroff").css("opacity", "0");
            $(".poweroff").css("scale", "0");
            $(".profile").css("opacity", "0");
            $(".profile").css("scale", "0");

            $(".edge").css("opacity", "1");
            $(".edge").css("scale", "1");

            $(".edgeshortcut").css("background", "rgba(255,255,255,0.1);");
            $(".edgeshortcut").css("box-shadow", "box-shadow: inset 0 -0.25vmax 0px var(--pri);");
            state = 2;
            powerstage = 2;
            profilestage = 2;
        } else if (programedge === 2) {
            // For state 2, set left to -20vmax
            $(".edgeshortcut").css("background", "rgba(255,255,255,0.1);");
            $(".edgeshortcut").css("box-shadow", "box-shadow: inset 0 -0.25vmax 0px var(--pri);");
            programedge = 1;
        }
    });
    $("#edgeexit").click(function(){
        $(".edge").css("opacity", "0");
        $(".edge").css("scale", "0.8");
        $(".edgeshortcut").css("background", "rgba(255,255,255,0)"); // Use "this" to target the clicked element
        $(".edgeshortcut").css("box-shadow", "inset 0 -0vmax 0px var(--pri)");
    });
    $(".edgeshortcut").click(function() {
        $(this).css("background", "rgba(255,255,255,0.1)"); // Use "this" to target the clicked element
        $(this).css("box-shadow", "inset 0 -0.25vmax 0px var(--pri)");
    });
    $(".edgeshortcut").mouseover(function() {
        $(this).css("background", "rgba(255,255,255,0.1)"); // Use "this" to target the clicked element
    });
    $(".edgeshortcut").mouseout(function() {
        $(this).css("background", "rgba(255,255,255,0)"); // Use "this" to target the clicked element
    });
});


setInterval(function(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    document.getElementById('dateandtime').textContent = hours + "h " + minutes + "min " + seconds + "s";
}, 1000);
setInterval(function() {
    var currentDate = new Date();
    var month = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();
  
    // Format the date in the desired format
    var formattedDate = month + "/" + day + "/" + year;
  
    // Update the element with the formatted date
    document.getElementById('dateandtime2').textContent = formattedDate;
  }, 1000);

