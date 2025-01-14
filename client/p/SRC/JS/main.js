$(document).ready(function() {
       const christmasDecor = $('.christmas-decor');
       const numberOfSparkles = 50;
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
               const randomScale = (Math.random() * 2 + 1).toFixed(2); // Random scale (1 to 3)
               const randomOpacity = (Math.random() * 0.7 + 0.3).toFixed(2); // Random opacity (0.7 to 1)
               const randomDuration = (Math.random() * 30 + 10).toFixed(2) + 's'; // Random duration (10s to 30s)
               const randomLeftToRightDuration = (Math.random() * 10 + 10).toFixed(2) + 's'; // Random duration for the "left-to-right" animation (10s to 20s)
   
               sparkle.css({
                   top: '-50px', // Position the element 50px above the top of the screen
                   left: randomLeft + '%',
                   'animation-delay': randomDuration,
                   'animation-duration': randomDuration + ', ' + randomLeftToRightDuration, // Apply both animation durations
                   'animation-fill-mode': 'forwards', // Ensure the element stays in the final state
                   'animation-name': 'snow, left-to-right', // Apply both animations
                   'animation-timing-function': 'linear, ease-in-out', // Apply the same timing function to both animations
                   'animation-iteration-count': 'infinite, infinite', // Repeat the "snow" animation infinitely, but only play the "left-to-right" animation once
                   transform: `scale(${randomScale})`,
                   opacity: randomOpacity
               });
   
               // Convert percentage to pixels for distance calculation
               const sparkleTop = christmasDecor.height() * (randomTop / 100);
               const sparkleLeft = christmasDecor.width() * (randomLeft / 100);
   
               // Checks the distance between the sparkles
               positionValid = true;
               if (checkDistance) {
                   for (const existingSparkle of sparkles) {
                       const existingTop = existingSparkle.top;
                       const existingLeft = existingSparkle.left;
                       const distance = Math.sqrt(Math.pow(sparkleTop - existingTop, 2) + Math.pow(sparkleLeft - existingLeft, 2));
   
                       if (distance < minDistance) {
                           positionValid = false;
                           break;
                       }
                   }
               }
   
               // If valid, store the position and append the element
               if (positionValid) {
                   sparkles.push({ top: sparkleTop, left: sparkleLeft });
                   christmasDecor.append(sparkle);
               }
           }
       }
   });
   
   