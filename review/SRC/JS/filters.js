
$(document).ready(function () {
  $('#search').on('input', function () {
    const keyword = $(this).val().toLowerCase();

    $('[data-name]').each(function () {
      const name = $(this).data('name').toLowerCase();

      if (name.includes(keyword)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});


$(document).ready(function () {
  function sortCards(order = 'desc', attr = 'time') {
    const $container = $('#reviews');
    const $cards = $container.children('a[data-' + attr + ']');

    $cards.sort(function (a, b) {
      const valA = parseFloat($(a).data(attr));
      const valB = parseFloat($(b).data(attr));

      if (order === 'asc') {
        return valA - valB;
      } else {
        return valB - valA;
      }
    });

    $cards.each(function () {
      $container.append(this);
    });
  }

  $('#sort-recent').on('click', () => sortCards('desc', 'time'));
  $('#sort-oldest').on('click', () => sortCards('asc', 'time'));
  $('#sort-price-low').on('click', () => sortCards('asc', 'price'));
  $('#sort-price-high').on('click', () => sortCards('desc', 'price'));
  $('#sort-rank-best').on('click', () => sortCards('desc', 'rating'));
  $('#sort-rank-worst').on('click', () => sortCards('asc', 'rating'));
});

$(document).ready(function () {
  $('[id^="type-"]').on('click', function () {
    const type = this.id.replace('type-', '');

    $('#reviews > a').each(function () {
      const cardType = $(this).data('type');
      if (cardType === type) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});

$(document).ready(function () {
  const $genreContainer = $('.cex.genre');
  const $cards = $('#reviews > a');
  const genresSet = new Set();

  // Generate buttons dynamically
  $cards.each(function () {
    const genresRaw = ($(this).data('genre') || '').toLowerCase();
    if (!genresRaw) return;

    const genres = genresRaw.split(/[\s,]+/);
    genres.forEach(g => genresSet.add(g));
  });

  genresSet.forEach(genre => {
    const displayName = genre.charAt(0).toUpperCase() + genre.slice(1);
    const $btn = $('<h2></h2>').addClass('button-m').text(displayName);
    $genreContainer.append($btn);
  });

  // Use event delegation for buttons generated dynamically
  $genreContainer.on('click', '.button-m', function () {

    const activeGenres = $genreContainer.find('.button-m.active').map(function () {
      return $(this).text().toLowerCase();
    }).get();

    if (activeGenres.length === 0) {
      $cards.show();
      return;
    }

    $cards.each(function () {
      const genresRaw = ($(this).data('genre') || '').toLowerCase();
      const cardGenres = genresRaw.split(/[\s,]+/);
      const matched = activeGenres.some(g => cardGenres.includes(g));

      if (matched) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});

$(document).ready(function () {
  const $gameplayContainer = $('.cex.gameplay');
  const $cards = $('#reviews > a');

  $gameplayContainer.on('click', '.button-m, .button', function () {

    const activeGameplays = $gameplayContainer.find('.button-m.active, .button.active').map(function () {
      return $(this).text().toLowerCase();
    }).get();

    if (activeGameplays.length === 0) {
      $cards.show();
      return;
    }

    $cards.each(function () {
      const gameplayRaw = ($(this).data('gameplay') || '').toLowerCase();
      const cardGameplays = gameplayRaw.split(/[\s,]+/);

      const matched = activeGameplays.some(g => cardGameplays.includes(g));
      if (matched) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});

















$(document).ready(function () {
  $('.cex .button').on('click', function () {
    const $this = $(this);
    const $parentCex = $this.closest('.cex');

    // Remove .active from other .button elements in the same .cex
    $parentCex.find('.button').not($this).removeClass('active');

    // Toggle .active on the clicked one
    $this.toggleClass('active');
  });
  $('.button-m').on('click', function () {
    const $this = $(this);
    $this.toggleClass('active');
  });
});
