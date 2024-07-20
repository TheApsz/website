$(document).keydown(function(event) {
       // Check if the pressed key is Right Shift (code == "ShiftRight")
       if (event.code === "ShiftRight") {
           $('#clickgui').toggleClass('active inactive');
       }
});

$(document).ready(function() {
       setInterval(function() {
              $('.catitem').each(function() {
                var $this = $(this); // Cache for efficiency
          
                if ($this.hasClass('active')) {
                  // Get the inner div's background color
                  var innerColor = $this.find('div').css('background');
          
                  // Check if color is valid
                  if (innerColor) {
                    // Set background and font color with opacity
                    $this.css({
                      'color': innerColor
                    });
                  }
                } else {
                  // Reset styles for inactive state
                  $this.css({
                    'background': '', // Or your original background color
                    'color': '' // Inherit default font color
                  });
                }
              });
       }, 0); // Update every 100ms

       $('.catitem').click(function() {
              $('.catitem').removeClass('active');
              $(this).addClass('active');

});
       
       $('#homesh').click(function() {
              $('.boxitem').addClass('inactive').removeClass('active');
              $('#homeb').addClass('active').removeClass('inactive');
       });
       $('#modulesh').click(function() {
              $('.boxitem').addClass('inactive').removeClass('active');
              $('#moduleb').addClass('active').removeClass('inactive');
       });
       $('#marketplacesh').click(function() {
              $('.boxitem').addClass('inactive').removeClass('active');
              $('#marketplaceb').addClass('active').removeClass('inactive');
       });
       $('#chatbotsh').click(function() {
              $('.boxitem').addClass('inactive').removeClass('active');
              $('#chatbotb').addClass('active').removeClass('inactive');
       });
       $('#dsfbsh').click(function() {
              $('.boxitem').addClass('inactive').removeClass('active');
              $('#dsfbb').addClass('active').removeClass('inactive');
       });
       $('#personsh').click(function() {
              $('.boxitem').addClass('inactive').removeClass('active');
              $('#personb').addClass('active').removeClass('inactive');
       });
       $('#settingsh').click(function() {
              $('.boxitem').addClass('inactive').removeClass('active');
              $('#settingb').addClass('active').removeClass('inactive');
       });
   });