$(document).ready(function() {
       $(document).keydown(function(event) {
           // Check if the pressed key is Right Shift (code == "ShiftRight")
           if (event.code === "ShiftRight") {
               $('#clickgui').toggleClass('active inactive');
           }
       });

       $('#homesh').click(function() {
              $('#homesb').addClass('on').removeClass('off');
              $('#modulessb, #marketplacesb, #azeraigptsb, #dsfbsb, #settingssb').addClass('off').removeClass('on');
       });
       $('#modulessh').click(function() {
              $('#modulessb').addClass('on').removeClass('off');
              $('#homesb, #marketplacesb, #azeraigptsb, #dsfbsb, #settingssb').addClass('off').removeClass('on');
       });
       $('#marketplacesh').click(function() {
              $('#marketplacesb').addClass('on').removeClass('off');
              $('#homesb, #modulessb, #azeraigptsb, #dsfbsb, #settingssb').addClass('off').removeClass('on');
       });
       $('#azeraigptsh').click(function() {
              $('#azeraigptsb').addClass('on').removeClass('off');
              $('#homesb, #modulessb, #marketplacesb, #dsfbsb, #settingssb').addClass('off').removeClass('on');
       });
       $('#dsfbsh').click(function() {
              $('#dsfbsb').addClass('on').removeClass('off');
              $('#homesb, #modulessb, #marketplacesb, #azeraigptsb, #settingssb').addClass('off').removeClass('on');
       });
       $('#settingssh').click(function() {
              $('#settingssb').addClass('on').removeClass('off');
              $('#homesb, #modulessb, #marketplacesb, #azeraigptsb, #dsfbsb').addClass('off').removeClass('on');
       });

       $('.switch').click(function() {
              var $item = $(this).closest('.item');
      
              $item.find('.switch').toggleClass('switchoff switchon');
              $item.find('.switchtitle').toggleClass('switchispff switchison');
              $item.find('.decor').toggleClass('switchdasisoff switchdasison');
      
              if ($(this).hasClass('switchon')) {
                  $(this).text('on');
              } else {
                  $(this).text('off');
              }
       });
});


$(document).ready(function() {
       var reachSlider = $('#reach');
       var reachText = $('#reachtxt');
       var cpsSlider = $('#cps');
       var cpsText = $('#cpstxt');
       // all of this caches the sliders
     
       reachSlider.on('input', function() {
         reachText.text($(this).val());
       });
       cpsSlider.on('input', function() {
         cpsText.text($(this).val());
       });
       // may 31 not the most efficient way but it works
       // june 14 doesnt work firefox*
});
     