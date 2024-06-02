$(document).ready(function() {
  function updateTimeAndDate() {
      const now = new Date();
      
      // Format the time
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      const timeString = hours + ':' + minutes + ' ' + ampm;

      // Format the date
      const day = now.getDate();
      const monthNames = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
      ];
      const month = monthNames[now.getMonth()];
      const dateString = day + 'th of ' + month;

      // Update the HTML elements
      $('#time').text(timeString);
      $('#date').text(dateString);
  }

  // Update the time and date every second
  setInterval(updateTimeAndDate, 1000);

  // Initialize the time and date immediately
  updateTimeAndDate();
});