$(document).ready(function() {
       let totalSeconds = 0;

       function pad(value) {
           return value.toString().padStart(2, '0');
       }

       function updateTime() {
           totalSeconds++;
           let hours = Math.floor(totalSeconds / 3600);
           let minutes = Math.floor((totalSeconds % 3600) / 60);
           let seconds = totalSeconds % 60;

           $('#time').text(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
       }

       setInterval(updateTime, 1000);
});