$(document).ready(function() {
       // Select all h3 elements within #arraylist
       let h3Elements = $('#arraylist h3');

       // Convert the NodeList to an array
       h3Elements = $.makeArray(h3Elements);

       // Sort the array based on the width of the elements
       h3Elements.sort(function(a, b) {
           return $(b).width() - $(a).width();
       });

       // Append the sorted elements back to the container
       $('#arraylist').empty().append(h3Elements);
   });
