$(document).ready(function() {
       var audio = new Audio('audio/vine.mp3');

       $('#notepad_sh').on('click', function() {
           $('#notepad').removeClass('inactive').addClass('active');
       });

       $('#notepad_textelement').on('input', function() {
              var text = $(this).val();
              
              if (text.includes('uwuify')) {
                  var uwuifiedText = text.replace(/R/gi, 'W');
                  $(this).val(uwuifiedText);
              } 
              
              if (text.includes('pirate')) {
                  var pirateSpeak = text
                      .replace(/\bhello\b/gi, 'ahoy')
                      .replace(/\bfriend\b/gi, 'matey')
                      .replace(/\bmy\b/gi, 'me')
                      .replace(/\bthe\b/gi, 'thar')
                      .replace(/\bman\b/gi, 'buccaneer')
                      .replace(/\bwoman\b/gi, 'wench');
                  $(this).val(pirateSpeak);
              }

              if (text.includes('emojify')) {
                     var emojis = ['😊', '😂', '🎉', '🚀', '👍'];
                     var emojiText = text.split(' ').map(word => word + (Math.random() > 0.5 ? ' ' + emojis[Math.floor(Math.random() * emojis.length)] : '')).join(' ');
                     $(this).val(emojiText);
              }

              if (text.includes('joe biden')) {
                     // Add the "biden" class to the #joe_biden element
                     $('#joe_biden').addClass('biden');
         
                     // Play the audio if it hasn't been played yet
                     if (!audioPlayed) {
                         audio.play();
                         audioPlayed = true; // Set the flag to true after playing the audio
                     }
                 } else {
                     // Optional: Remove the "biden" class if "joe biden" is no longer in the text
                     $('#joe_biden').removeClass('biden');
                     audioPlayed = false; // Reset the flag when "joe biden" is not found
                 }
                 if (text.includes('donald trump')) {
                     // Add the "biden" class to the #joe_biden element
                     $('#trump').addClass('biden');
         
                     // Play the audio if it hasn't been played yet
                     if (!audioPlayed) {
                         audio.play();
                         audioPlayed = true; // Set the flag to true after playing the audio
                     }
                 } else {
                     // Optional: Remove the "biden" class if "joe biden" is no longer in the text
                     $('#trump').removeClass('biden');
                     audioPlayed = false; // Reset the flag when "joe biden" is not found
                 }
          });
});


   