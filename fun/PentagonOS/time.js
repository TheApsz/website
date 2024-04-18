// Function to update the time
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


    
    