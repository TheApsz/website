$(document).ready(function() {
       $('#targethud .crosshair').hover(
         function() {
           // Add the "active" class on hover
           $('#targethud-main').addClass('active');
         },
         function() {
           // Remove the "active" class when not hovering
           $('#targethud-main').removeClass('active');
         }
       );
     });


     $(document).ready(function() {
       const $mainFull = $('#targethud-main-full');
       const $mainFullDelay = $('#targethud-main-full-delay');
       const minReduction = 5; // Minimum percentage reduction
       const maxReduction = 15; // Maximum percentage reduction
 
       $('.crosshair').on('click', function() {
         // Get current width percentage of #targethud-main-full
         let currentWidth = parseFloat($mainFull.width()) / $mainFull.parent().width() * 100;
 
         // Calculate random reduction between 5% and 15%
         let reduction = Math.random() * (maxReduction - minReduction) + minReduction;
 
         // Update width
         let newWidth = currentWidth - reduction;
 
         // Reset to 100% if it goes below 0%
         if (newWidth <= 0) {
           newWidth = 100;
         }
 
         // Set new width of #targethud-main-full
         $mainFull.css('width', newWidth + '%');
 
         // Delay update for #targethud-main-full-delay
         setTimeout(() => {
           $mainFullDelay.css('width', newWidth + '%');
         }, 500); // 0.5s delay
       });
     });


     $(document).ready(function() {
       const numHitmarkers = 10; // Number of hitmarkers to spawn
 
       $('.crosshair').on('click', function() {
         const $targetHudMain = $('#targethud-main');
 
         for (let i = 0; i < numHitmarkers; i++) {
           // Create a new hitmarker
           const $hitmarker = $('<div class="hitmarker"></div>');
 
           // Calculate random positions within #targethud-main
           const randomX = Math.random() * ($targetHudMain.width() - 10); // Subtract 10 to keep hitmarker fully visible
           const randomY = Math.random() * ($targetHudMain.height() - 10);
 
           // Set hitmarker position
           $hitmarker.css({
             left: `${randomX}px`,
             top: `${randomY}px`,
           });
 
           // Append hitmarker to #targethud-main
           $targetHudMain.append($hitmarker);
 
           // Remove the hitmarker after 1 second
           setTimeout(() => {
             $hitmarker.remove();
           }, 1000);
         }
       });
     });