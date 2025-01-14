$(document).ready(function() {
       // Get the text from the h1 element
       var text = $('#text').text();
       
       // Split the text into individual characters
       var characters = text.split('');
       
       // Create a new HTML string with each character wrapped in an h1 tag
       var newHtml = characters.map(function(char) {
           return '<h1>' + char + '</h1>'; // No display: none
       }).join('');
       
       // Replace the original h1 with the new HTML
       $('#text').replaceWith(newHtml);
       
       // Set animation delay for each character
       $('h1').each(function(index) {
           var delay = index * 0.1; // 0s, 0.2s, 0.4s, etc.
           $(this).css('animation-delay', delay + 's'); // Set the animation delay
       });
});

$(document).ready(function() {
    const shinyElement = $('.shiny');
    const numberOfSparkles = 25;
    const minDistance = 50;
    const checkDistance = false;
       
    const sparkles = [];
       
    for (let i = 0; i < numberOfSparkles; i++) {
        let sparkle;
        let positionValid = false;
           
        while (!positionValid) {
            sparkle = $('<div class="sparkle"></div>');
            const randomTop = (Math.random() * 100).toFixed(1); // Random top position (0% to 100%) rounded to 1 decimal place  
            const randomLeft = (Math.random() * 100).toFixed(1); // Random left position (0% to 100%) rounded to 1 decimal place
            const randomDelay = (Math.random() * 3.62).toFixed(2) + 's'; // Random delay (0s to 3.62s)
   
            sparkle.css({
                top: randomTop + '%',
                left: randomLeft + '%',
                'animation-delay': randomDelay
            });
   
            // Convert percentage to pixels for distance calculation
            const sparkleTop = shinyElement.height() * (randomTop / 100);
            const sparkleLeft = shinyElement.width() * (randomLeft / 100);
   
            // checks the distance between the sparkles
            positionValid = true;
            if (checkDistance) {
                for (const existingSparkle of sparkles) {
                    const existingTop = existingSparkle.top;
                    const existingLeft = existingSparkle.left;
                    const distance = Math.sqrt(Math.pow(sparkleTop - existingTop, 2) + Math.pow(sparkleLeft - existingLeft, 2));
   
                    if (distance < minDistance) {
                        positionValid = false;
                        // cancels current event
                        // FIX - softlocks the whole website and crashes the browser
                        break;
                    }
                }
            }
   
            // If valid, store the position
            if (positionValid) {
                sparkles.push({ top: sparkleTop, left: sparkleLeft });
                shinyElement.append(sparkle);
            }
        }
    }
});
   
   
   
   
   
   
   
   
   