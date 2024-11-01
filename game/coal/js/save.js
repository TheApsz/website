// save.js

// Function to save the score and pickaxe level to localStorage
function saveData() {
       localStorage.setItem('score', score);
       localStorage.setItem('pickaxeLevel', pickaxeLevel);
       
       const scoreDataSize = new Blob([score]).size; 
       const pickaxeDataSize = new Blob([pickaxeLevel]).size;
       
       console.log(`Saved score data size: ${scoreDataSize} bytes`);
       console.log(`Saved pickaxe data size: ${pickaxeDataSize} bytes`);
   }
   
   // Load initial score and pickaxe level data size
   const initialScoreDataSize = localStorage.getItem('score') ? new Blob([localStorage.getItem('score')]).size : 0; 
   const initialPickaxeDataSize = localStorage.getItem('pickaxeLevel') ? new Blob([localStorage.getItem('pickaxeLevel')]).size : 0; 
   console.log(`Loaded score data size: ${initialScoreDataSize} bytes`);
   console.log(`Loaded pickaxe data size: ${initialPickaxeDataSize} bytes`);
   
   // Save data every 5 seconds
   setInterval(saveData, 5000);