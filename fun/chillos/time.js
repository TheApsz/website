$(document).ready(function() {
setInterval(function() {
       var currentTime = new Date();
       var hours = currentTime.getHours();
       var minutes = currentTime.getMinutes();
       var seconds = currentTime.getSeconds();
       var formattedTime = hours + ":" + minutes;
       document.getElementById('time').textContent = formattedTime;
       document.getElementById('time').classList.remove('show'); // Remove the 'show' class to reset animation
       void document.getElementById('time').offsetWidth; // Trigger reflow to restart the animation
       document.getElementById('time').classList.add('show'); // Add the 'show' class to start the animation
    }, 1000);
    
    // Function to update the date
    setInterval(function() {
       var currentDate = new Date();
       var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
       var monthIndex = currentDate.getMonth(); // Get the month index (0-indexed)
       var monthName = monthNames[monthIndex]; // Get the month name from the array
       var formattedDate = currentDate.getDate() + " (" + monthName + ")"; // Format the date
       document.getElementById('date').textContent = formattedDate;
       document.getElementById('date').classList.remove('show'); // Remove the 'show' class to reset animation
       void document.getElementById('date').offsetWidth; // Trigger reflow to restart the animation
       document.getElementById('date').classList.add('show'); // Add the 'show' class to start the animation
    }, 1000);

    const slider = document.getElementById("focusminutes");
const sliderValueElement = document.querySelector("#focustime");

const intervals = [ // Define interval ranges
  { min: 8, max: 24, text: "Potato" },
  { min: 25, max: 56, text: "Low" },
  { min: 57, max: 96, text: "Medium" },
  { min: 97, max: 128, text: "High" }
];

slider.step = 15; // Adjust based on your intervals

slider.addEventListener("input", function() {
  const value = parseInt(slider.value); // Convert value to integer
  let intervalText = ""; // Initialize text

  for (const interval of intervals) {
    if (value >= interval.min && value <= interval.max) {
      intervalText = interval.text;
      break; // Exit loop after finding the matching interval
    }
  }

  sliderValueElement.textContent = value + "mins";
});
});

    
    