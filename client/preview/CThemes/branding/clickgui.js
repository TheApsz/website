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


       $('#combatsh').click(function() {
              $('.combat').addClass('mon').removeClass('moff');
              $('.movement, .render, .player, .exploit').addClass('moff').removeClass('mon');
          });
      
          $('#movementsh').click(function() {
              $('.movement').addClass('mon').removeClass('moff');
              $('.combat, .render, .player, .exploit').addClass('moff').removeClass('mon');
          });
      
          $('#rendersh').click(function() {
              $('.render').addClass('mon').removeClass('moff');
              $('.combat, .movement, .player, .exploit').addClass('moff').removeClass('mon');
          });
      
          $('#playersh').click(function() {
              $('.player').addClass('mon').removeClass('moff');
              $('.combat, .movement, .render, .exploit').addClass('moff').removeClass('mon');
          });
      
          $('#exploitsh').click(function() {
              $('.exploit').addClass('mon').removeClass('moff');
              $('.combat, .movement, .render, .player').addClass('moff').removeClass('mon');
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

       $('.download').click(function() {
              var $item = $(this).closest('.item');
      
              $item.find('.margin').addClass('downloaded');
              $item.find(this).addClass('download2');
       });
});


$(document).ready(function() {
       var reachSlider = $('#reach');
       var reachText = $('#reachtxt');
       var cpsSlider = $('#cps');
       var cpsText = $('#cpstxt');
       var critSlider = $('#crit');
       var critText = $('#crittxt');
       var veloSlider = $('#velo');
       var veloText = $('#velotxt');
       var scafSlider = $('#scaf');
       var scafText = $('#scaftxt');
       // all of this caches the sliders
     
       reachSlider.on('input', function() {
         reachText.text($(this).val());
       });
       cpsSlider.on('input', function() {
         cpsText.text($(this).val());
       });
       critSlider.on('input', function() {
         critText.text($(this).val());
       });
       veloSlider.on('input', function() {
              veloText.text($(this).val());
       });
       scafSlider.on('input', function() {
              scafText.text($(this).val());
       });
       // may 31 not the most efficient way but it works
       // june 14 doesnt work firefox*
});

$(document).ready(function() {
       $('#car').on('wheel', function(event) {
           if (event.originalEvent.deltaY !== 0) {
               event.preventDefault();
               this.scrollLeft += event.originalEvent.deltaY;
           }
       });
});
$(document).ready(function() {
       $('#clickgpttext').keypress(function(event) {
           if (event.which === 13) { // 13 is the keycode for Enter key
               const inputValue = $(this).val();
               if (inputValue.toLowerCase() === 'uwuify') {
                   window.location.href = 'https://pentrum.pages.dev/client/preview/uwu.html';
               } else {
                   alert('ClickGPT is currently offline!');
               }
           }
       });
});