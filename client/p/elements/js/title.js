$(document).ready(function(){
       let lastMouseX = 0;
       let lastMouseY = 0;
       let lastTime = 0;
       let originalImageSrc = "https://polargram.pages.dev/!src/character/cool.webp"; // Original image
       let hoverImageSrc = "https://polargram.pages.dev/!src/character/blep2.webp"; // Hover image
       let fastMoveImageSrc = "https://polargram.pages.dev/!src/character/beauty.webp"; // Fast mouse move image
       let revertTimeout;

       // Hover behavior
       $("#doodle").hover(
           function() {
               $("#doodle > img").attr("src", hoverImageSrc);
           },
           function() {
               // Clear timeout if hover ends
               clearTimeout(revertTimeout);
               $("#doodle > img").attr("src", originalImageSrc);
           }
       );

       $("#doodle").mousemove(function(e) {
              let currentTime = new Date().getTime();
              let deltaX = e.pageX - lastMouseX;
              let deltaY = e.pageY - lastMouseY;
              let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

              if (currentTime - lastTime < 200 && distance > 15) {
                  // If mouse moved more than 100px in 0.5s inside #doodle
                  $("#doodle > img").attr("src", fastMoveImageSrc);

                  // Clear previous timeout to avoid overlapping
                  clearTimeout(revertTimeout);

                  // Revert to the hover or original image after 1 second
                  revertTimeout = setTimeout(function() {
                      if ($("#doodle").is(":hover")) {
                          // If still hovering, set it back to the hover image
                          $("#doodle > img").attr("src", hoverImageSrc);
                      } else {
                          // Otherwise, reset it to the original image
                          $("#doodle > img").attr("src", originalImageSrc);
                      }
                  }, 1000);
              }

              // Update last mouse position and time
              lastMouseX = e.pageX;
              lastMouseY = e.pageY;
              lastTime = currentTime;
          });
   });