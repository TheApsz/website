$(document).ready(function() {
  $('#menush').click(function() {
      const menu = $('#menu');

      if (menu.css('opacity') == 0) {
          menu.css({ opacity: 1, scale: '1' });
      } else {
          menu.css({ opacity: '', scale: '' });
      }
  });


  $('.ind').click(function() {
    const indicator = $(this).find('.indicator');
    const currentWidth = parseInt(indicator.css('width'));

    if (currentWidth === 0) {
        indicator.css({ width: '25%' });
    } else {
        indicator.css({ width: '0%' });
    }});
});
