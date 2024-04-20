$(document).ready(function() {
       const textElement = $(".decorgridsparkle");
       const texts = ["Developers", "Gamers", "Everyone"];
       let currentTextIndex = 0;
       let animationInProgress = false; // Flag to prevent overlapping animations
     
       function changeText() {
              // Prevent overlapping animations
              if (animationInProgress) return;
              animationInProgress = true;
          
              const currentText = texts[currentTextIndex];
          
              // Initial scale up animation (0.5s)
              textElement.animate({
                transform: "scale(1)", // Start at normal size
                opacity: 0, // Full opacity
                duration: 100,
              }, function() {
                // Text update and display (2s)
                textElement.text(currentText);
                setTimeout(function() {
                  // Scale down animation (0.5s) after display duration
                  textElement.animate({
                    transform: "scale(0.8)", // Scale down to 80%
                    opacity: 1, // Reduce opacity to 50%
                    duration: 100,
                  }, function() {
                    animationInProgress = false; // Allow next animation
                    currentTextIndex = (currentTextIndex + 1) % texts.length;
                    setTimeout(changeText, 2000); // Wait 2 seconds before next cycle
                  });
                }, 100); // Delay before scale down animation
       });
}
          
       changeText(); // Call initially to set the first text
});
     