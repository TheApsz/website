$(document).ready(function() {
    $('#menush').click(function() {
        $('#menu').toggleClass('visible');
    });

    $('#foldersh').click(function() {
        $('#folder').toggleClass('visible');
    });


    $('.ind').click(function() {
        $(this).find('.indicator').toggleClass('expanded');
     });
});

$( function() {
    $( ".draggable" ).draggable();
} );
$( function() {
    $( ".resizable" ).resizable();
} );
