$(document).ready(function() {
       function updateTimeAndDate() {
           const now = new Date();
           const options = { month: 'long', day: 'numeric' };
           const dateString = now.toLocaleDateString('en-US', options);
           
           // Format time with leading zeros for hours and minutes
           const hours = now.getHours().toString().padStart(2, '0');
           const minutes = now.getMinutes().toString().padStart(2, '0');
           const timeString = `${hours}:${minutes}`;
           
           $('#timeanddate').text(`${dateString} | ${timeString}`);
       }
   
       // Update the time and date every second
       setInterval(updateTimeAndDate, 1000);
       
       // Initial update
       updateTimeAndDate();
});
$(document).ready(function() {
       function updateRam() {
           // Generate a random number between 1.3 and 1.5
           const randomNumber = (Math.random() * (1.5 - 1.3) + 1.3).toFixed(1);
           
           // Update the #ram element with the random number
           $('#ram').text(randomNumber);
       }
   
       // Update the #ram element every 3 seconds
       setInterval(updateRam, 3000);
       
       // Initial update
       updateRam();
});
$(document).ready(function() {
       function updateVolume() {
           const volume = $('#slider_volume').val();
           $('#volume').text(`${volume}%`);
       }
   
       // Initial update
       updateVolume();
   
       // Update volume on input change
       $('#slider_volume').on('input', function() {
           updateVolume();
       });
   });