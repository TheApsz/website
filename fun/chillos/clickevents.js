$(document).ready(function() {
    $('#menush').click(function() {
        $('#menu').toggleClass('visible');
    });

    $('#foldersh').click(function() {
        $('#folder').toggleClass('visible');
    });
    $('#folder > .title > .control > .close').click(function() {
        $('#folder').toggleClass('visible');
        $('#foldersh > .indicator').toggleClass('expanded');
    });


    $('#searchsh').click(function() {
        $('#search').toggleClass('visible');
    });

    $('.terminalsh').click(function() {
        $('#terminal').toggleClass('visible');
        $('.terminalsh').addClass('active');
        $('.terminalsh > .indicator').toggleClass('expanded');
    });
    $('#terminal > .title > .control > .close').click(function() {
        $('#terminal').toggleClass('visible');
        $('.terminalsh').removeClass('active');
        $('.terminalsh > .indicator').toggleClass('expanded');
    });


    $('.ind').click(function() {
        $(this).find('.indicator').toggleClass('expanded');
     });
});

$(function() {
    $('.draggable-parent').each(function() {
        $(this).draggable({
            handle: '.draggable',
            start: function(event) {
                // Only allow dragging if the target is the .draggable element itself
                if (!$(event.originalEvent.target).closest('.draggable').length) {
                    return false;
                }
            }
        });
    });
});
$( function() {
    $( ".resizable" ).resizable();
} );
$(document).ready(function() {
    $('.popup').on('click', function() {
        if (!$(this).hasClass('visible')) return; // Exit if clicked element doesn't have the visible class

        $('.visible').removeClass('active').css('z-index', '10'); // Reset z-index for all visible boxes
        $(this).addClass('active').css('z-index', '100'); // Set z-index for clicked box
    });
});


$(function() {

    $(document).on('contextmenu', function(e) {
        e.preventDefault();
        $('#contextmenu')
            .css({
                top: e.pageY + 'px',
                left: e.pageX + 'px'
            })
            .toggleClass('visible');
    });

    // Hide the custom context menu on click elsewhere
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#contextmenu').length) {
            $('#contextmenu').removeClass('visible');
        }
    });

    // Option click handlers
    $('.context-menu h2').on('click', function() {
        $('#contextmenu').removeClass('visible');
    });


    $('#refresh').on('click', function() {
        location.reload();
    });

    $('#copy').on('click', function() {
        const selectedText = window.getSelection().toString();
        if (selectedText) {
            // Create a temporary element to hold the text
            const tempElement = $('<textarea>');
            $('body').append(tempElement);
            tempElement.val(selectedText).select();
            document.execCommand('copy');
            tempElement.remove();
            console.log('Text has been copied');
        } else {
            console.log('Failed to copy text');
        }
    });
});
