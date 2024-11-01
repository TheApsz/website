// upgrades.js

$(document).ready(function() {
       // Initial display of cost and pickaxe level
       updatePickaxeDisplay();
       updatePickaxeCostDisplay();
   
       // Click event for buying a pickaxe
       $('#buy-pickaxe').on('click', function() {
           const cost = calculatePickaxeCost(); // Calculate the cost
           
           if (score >= cost) { // Check if enough score
               score -= cost; // Deduct cost from score
               pickaxeLevel++; // Increment pickaxe level
               updatePickaxeDisplay(); // Update pickaxe display
               updateScoreDisplay(); // Update score display
               updatePickaxeCostDisplay(); // Update cost display
           } else {
               alert("Not enough score to buy a pickaxe!");
           }
       });
   });