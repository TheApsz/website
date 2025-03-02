$(document).ready(function() {
    function generateEncodedLink() {
        let input = $("#input").val().trim();
        if (!input) {
            return;
        }

        try {
            let encoded = btoa(input);
            let finalUrl = `https://polargram.pages.dev/srtlnk?=${encoded}`;
            $("#output").html(`<a href="${finalUrl}" target="_blank">${finalUrl}</a>`)
        } catch (e) {
            alert("Invalid URL format!");
        }
    }

    $("#generate").click(generateEncodedLink);
    $("#input").keypress(function(e) {
        if (e.which === 13) { // Enter key
            generateEncodedLink();
        }
    });
});

$(document).ready(function() {
    // Copy content of #output to clipboard when #copy-output is clicked
    $('#copy-output').click(function() {
        var textToCopy = $('#output').text(); // Get text inside #output
        var $tempInput = $('<input>'); // Create a temporary input element
        $('body').append($tempInput); // Append it to the body
        $tempInput.val(textToCopy).select(); // Set the value to the text in #output and select it
        document.execCommand('copy'); // Execute the copy command
        $tempInput.remove(); // Remove the temporary input element

        $('#copy-alert').addClass('show-alert');

                // Reset the animation after it completes (3 seconds)
        setTimeout(function() {
            $('#copy-alert').removeClass('show-alert');
        }, 3000); // Matches the duration of the animation
    });

    // Open the link inside #output when #test-output is clicked
    $('#test-output').click(function() {
        var linkToOpen = $('#output').text(); // Get the text (link) inside #output

        // Do nothing if the output says "Output here"
        if (linkToOpen === "Output here") {
            return; // Prevent any action if it's the placeholder text
        }

        // Otherwise, open the link in a new tab
        window.open(linkToOpen, '_blank');
    });
});