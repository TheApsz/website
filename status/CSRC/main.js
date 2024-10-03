$(document).ready(function() {
       function getRandomNumber(min, max) {
         return Math.random() * (max - min) + min;
       }
     
       function updateRandomNumber() {
         var randomNumber = getRandomNumber(68.200, 82.800);
         var formattedNumber = randomNumber.toFixed(3);
     
         // Find the text node containing the percentage sign
         var textNode = $('#p-d').contents().filter(function() {
           return this.nodeType === 3 && this.nodeValue.indexOf('%', '1', '2', '3', '4', '5', '6', '7', '8', '9');
         });
     
         // Replace the percentage value with the new random number
         textNode.replaceWith(formattedNumber + 'mb/s');
       }
     
       setInterval(updateRandomNumber, 50);
});
$(document).ready(function() {
       function getRandomNumber(min, max) {
         return Math.random() * (max - min) + min;
       }
     
       function updateRandomNumber() {
         var randomNumber = getRandomNumber(11.000, 19.000);
         var formattedNumber = randomNumber.toFixed(3);
     
         // Find the text node containing the percentage sign in #p-u
         var textNode = $('#p-u').contents().filter(function() {
           return this.nodeType === 3 && this.nodeValue.indexOf('%', '1', '2', '3', '4', '5', '6', '7', '8', '9');
         });
     
         // Replace the percentage value with the new random number
         textNode.replaceWith(formattedNumber + 'mb/s');
       }
     
       setInterval(updateRandomNumber, 50);
});
$(document).ready(function() {
       function getRandomNumber(min, max) {
         return Math.random() * (max - min) + min;
       }
     
       function updateRandomNumber() {
         var randomNumber = getRandomNumber(11.000, 19.000);
         var formattedNumber = randomNumber.toFixed(3);
     
         // Find the text node containing the percentage sign in #p-u
         var textNode = $('#p-t').contents().filter(function() {
           return this.nodeType === 3 && this.nodeValue.indexOf('%', '1', '2', '3', '4', '5', '6', '7', '8', '9');
         });
     
         // Replace the percentage value with the new random number
         textNode.replaceWith(formattedNumber + 'mb/s');
       }
     
       setInterval(updateRandomNumber, 50);
});


$(document).ready(function() {
       function getRandomNumber(min, max) {
         return Math.random() * (max - min) + min;
       }
     
       function updateRandomNumber() {
         var randomNumber = getRandomNumber(0.200, 1.800);
         var formattedNumber = randomNumber.toFixed(3);
     
         // Find the text node containing the percentage sign
         var textNode = $('#po-d').contents().filter(function() {
           return this.nodeType === 3 && this.nodeValue.indexOf('%', '1', '2', '3', '4', '5', '6', '7', '8', '9');
         });
     
         // Replace the percentage value with the new random number
         textNode.replaceWith(formattedNumber + 'mb/s');
       }
     
       setInterval(updateRandomNumber, 50);
});
$(document).ready(function() {
       function getRandomNumber(min, max) {
         return Math.random() * (max - min) + min;
       }
     
       function updateRandomNumber() {
         var randomNumber = getRandomNumber(2.000, 6.000);
         var formattedNumber = randomNumber.toFixed(3);
     
         // Find the text node containing the percentage sign in #p-u
         var textNode = $('#po-u').contents().filter(function() {
           return this.nodeType === 3 && this.nodeValue.indexOf('%', '1', '2', '3', '4', '5', '6', '7', '8', '9');
         });
     
         // Replace the percentage value with the new random number
         textNode.replaceWith(formattedNumber + 'mb/s');
       }
     
       setInterval(updateRandomNumber, 50);
});
$(document).ready(function() {
       function getRandomNumber(min, max) {
         return Math.random() * (max - min) + min;
       }
     
       function updateRandomNumber() {
         var randomNumber = getRandomNumber(11.000, 19.000);
         var formattedNumber = randomNumber.toFixed(3);
     
         // Find the text node containing the percentage sign in #p-u
         var textNode = $('#po-t').contents().filter(function() {
           return this.nodeType === 3 && this.nodeValue.indexOf('%', '1', '2', '3', '4', '5', '6', '7', '8', '9');
         });
     
         // Replace the percentage value with the new random number
         textNode.replaceWith(formattedNumber + 'mb/s');
       }
     
       setInterval(updateRandomNumber, 50);
});