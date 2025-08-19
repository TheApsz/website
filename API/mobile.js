cash(() => {
  function updateClasses() {
    if (cash(window).width() < 1100) {
      cash('.desktop').removeClass('desktop').addClass('mobile');
      cash('.mobile').show();
    } else {
      cash('.mobile').removeClass('mobile').addClass('desktop').hide();
    }
  }

  updateClasses();

  cash(window).on('resize', updateClasses);
});
