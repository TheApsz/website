$(document).ready(function () {
  $(".card-hover").each(function () {
    const card = this;
    let currentX = 0,
      currentY = 0;
    let targetX = 0,
      targetY = 0;

    // Mouse move updates target rotation
    $(card).on("mousemove", function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      targetX = ((y - centerY) / centerY) * 20;
      targetY = ((x - centerX) / centerX) * 20;
    });

    $(card).on("mouseleave", function () {
      targetX = 0;
      targetY = 0;
    });

    // Animation loop
    function animate() {
      currentX += (targetX - currentX) * 0.1; // smooth lerp
      currentY += (targetY - currentY) * 0.1;

      $(card).css(
        "transform",
        `rotateX(${-currentX}deg) rotateY(${currentY}deg)`
      );

      requestAnimationFrame(animate);
    }

    animate(); // start the loop
  });
});
