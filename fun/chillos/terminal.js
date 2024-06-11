$(document).ready(function() {
       $('#textInput').on('keypress', function(e) {
           if (e.which === 13) { // Check if Enter key is pressed
               const inputValue = $(this).val().trim().toLowerCase();
   
               if (inputValue === '/help') {
                   const helpText = "/help · Displays this text<br>/tell {input} · displays a text that you entered<br>/calc {input} · A very simple calculator<br>/google · Redirects you to google.com<br>/twitter · Redirects you to twitter<br>/get {input} · Tries to receive a http request from specified website<br>/debug · Information about this operating system<br>/github · Redirects to TheApsz github page<br>/exit · closes the terminal";
                   const h2Element = $('<h2>').html(helpText); // Using .html() to include <br> tags
                   $('#mainoutput').append(h2Element);
               } else if (inputValue.startsWith('/tell ')) {
                   const tellText = inputValue.substring(6); // Extract the text after '/tell '
                   const h2Element = $('<h2>').text(tellText); // Using .text() to set the content
                   $('#mainoutput').append(h2Element);
               } else if (inputValue.startsWith('/calc ')) {
                   const expression = inputValue.substring(6); // Extract the expression after '/calc '
                   try {
                       // Replace * with * and / with / to evaluate the expression
                       const sanitizedExpression = expression.replace(/[^0-9+\-*/]/g, '');
                       const result = eval(sanitizedExpression);
                       const h2Element = $('<h2>').text(`Your number is: ${result}`);
                       $('#mainoutput').append(h2Element);
                   } catch (error) {
                       const h2Element = $('<h2>').text('Error in calculation.');
                       $('#mainoutput').append(h2Element);
                   }
               } else if (inputValue === '/google') {
                   window.location.href = 'https://www.google.com';
               } else if (inputValue === '/twitter') {
                   window.location.href = 'https://x.com';
               } else if (inputValue.startsWith('/get ')) {
                   const getText = "Failed to receive a HTTP request - insufficient permissions";
                   const h2Element = $('<h2>').html(getText); // Using .html() to include <br> tags
                   $('#mainoutput').append(h2Element);
               } else if (inputValue === '/debug') {
                   const debugText = "Operating system · MysticOS<br>Operating system version · 0.1a<br>Build number · 12b<br>Server status · Online<br>Client status · Online<br>Client account · Premium";
                   const h2Element = $('<h2>').html(debugText); // Using .html() to include <br> tags
                   $('#mainoutput').append(h2Element);
               } else if (inputValue === '/github') {
                   window.location.href = 'https://github.com/theapsz';
               } else {
                   const incorrectText = "This command does not exist. Try running /help";
                   const h2Element = $('<h2>').html(incorrectText); // Using .html() to include <br> tags
                   $('#mainoutput').append(h2Element);
               }
   
               $(this).val(''); // Clear the input field after processing
           }
       });
   });
   