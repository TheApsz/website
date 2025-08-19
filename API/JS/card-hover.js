$(document).ready(function () {
  $(".card-hover").each(function () {
    $(this).on("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 20;
      const rotateY = ((x - centerX) / centerX) * 20;

      $(this).css("transform", `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`);
    });

    $(this).on("mouseleave", function () {
      $(this).css("transform", "rotateX(0) rotateY(0)");
    });
  });
});
