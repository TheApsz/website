document.addEventListener("DOMContentLoaded", function(event) {
       const blob = document.getElementById("jerry");
   
       let clientX, clientY;
   
       window.onpointermove = event => {
           clientX = event.clientX;
           clientY = event.clientY;
       };
   
       function animate() {
           blob.animate(
               {
                   left: `${clientX}px`,
                   top: `${clientY}px`
               },
               { duration: 0, fill: "forwards" }
           );
   
           requestAnimationFrame(animate);
       }
   
       animate();
   });