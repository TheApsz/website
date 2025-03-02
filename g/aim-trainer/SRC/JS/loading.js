$(document).ready(function() {
    console.log("Checking for elements");

    // Declare the interval variable
    var checkInterval;

    function checkLoadStatus() {
        var allLoaded = true;
        console.log("Checking load status...");

        // Check if all elements with the class 'loadCheck' have been loaded
        $('.loadCheck').each(function() {
            if (!$(this).hasClass('loaded')) { // If the element doesn't have 'loaded' class
                allLoaded = false;
                console.log("Element not loaded: ", this);
            }
        });

        // If all elements are loaded, remove the #loading element and stop the loop
        if (allLoaded) {
            console.log("All elements loaded. Removing #loading.");
            $('#loading').remove();

            // Stop the interval loop
            clearInterval(checkInterval);
            console.log("Interval stopped.");
        } else {
            console.log("Some elements are still not loaded.");
        }
    }

    checkInterval = setInterval(checkLoadStatus, 100);
});


$('.loadCheck').each(function() {
    if ($(this).hasClass('loaded')) {
        console.log('Element is already loaded');
    } else {
        // Manually adds 'loaded' class when the div or any element is ready
        $(this).addClass('loaded');
        console.log('Loaded element: ', this);
    }
});


