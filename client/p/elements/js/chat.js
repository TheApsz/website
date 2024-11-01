$(document).ready(function () {
       $(document).ready(function () {
              // Toggle chat input visibility with "T" key (only if input is not focused)
              $(document).on('keydown', function (event) {
                  var $chatInput = $('#chat-input');
                  
                  // Check if the active element (focused element) is not the chat input
                  if (event.key.toLowerCase() === 't' && !$chatInput.is(':focus')) { 
                      event.preventDefault(); // Prevent default behavior
          
                      var $chatContainer = $('#chat');
          
                      // Toggle the 'active' class to show or hide the input
                      $chatContainer.toggleClass('active');
          
                      if ($chatContainer.hasClass('active')) {
                          $chatInput.focus(); // Focus on the input when it's active
                      }
                  }
              });
          
              // Remove the 'active' class when chat input loses focus
              $('#chat-input').on('blur', function () {
                  $('#chat').removeClass('active');
              });
          });


       $(document).on('mouseenter', '.hoverable', function() {
              $("#cursor").css('transform', 'scale(0.5)');
              $("#cursor").css('background', 'var(--pri)');
       });
      
       $(document).on('mouseleave', '.hoverable', function() {
              $("#cursor").css('transform', '');
              $("#cursor").css('background', '');
       });

       $('#chat-input').on('keypress', function (event) {
           if (event.which === 13) { // Detect Enter key
               event.preventDefault(); // Prevent default form submission

               var inputText = $(this).val().trim(); // Get the input text
               var outputHTML = ''; // Output that we will append

               // Case 2, 3, 4, 5: Check for color-coding syntax
               var colorCodePattern = /\((\w+)\.(\w+)\)/g;

               // If inputText matches the color pattern
               if (colorCodePattern.test(inputText)) {
                   inputText = inputText.replace(colorCodePattern, function (match, colorClass, colorText) {
                       return '<span class="' + colorClass + ' hoverable">' + colorText + '<h2>(' + colorClass + '.*)</h2></span>';
                   });

                   // Handle Case 3 and Case 4 (when the color is either before or after normal text)
                   outputHTML = '<h3>PLAYER <span>' + inputText + '</span></h3>';

               } else {
                   // Case 1: Simple text without color codes
                   outputHTML = '<h3>PLAYER <span>' + inputText + '</span></h3>';
               }

               // Append the message to the chat
               $('#messages').append(outputHTML);

               // Clear the input field after sending
               $(this).val('');
           }
       });
   });