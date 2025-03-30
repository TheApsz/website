$(document).ready(function() {
    $('[id$="-sh"]').on('click', function() {
        let targetId = $(this).attr('id').replace('-sh', '-select');

        $('[id$="-select"]').removeClass('active');

        $('#' + targetId).toggleClass('active');
    });
});

