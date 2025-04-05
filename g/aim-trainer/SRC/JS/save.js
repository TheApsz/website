$(document).ready(function() {
    // Function to load the saved state from localStorage
    function loadState() {
        const savedState = localStorage.getItem('aimTrainer');
      
        if (savedState) {
            const aimTrainer = JSON.parse(savedState);
            console.log("Loaded aimTrainer state:", aimTrainer);
  


            if (aimTrainer['Points']) {
                $('#Points').text(aimTrainer['Points']);
                console.log("Loaded Points text:", aimTrainer['Points']);
            }

            // Apply the saved states to elements
            if (aimTrainer['graphicAmoled'] === 'active') {
                $('#graphicAmoled').addClass('active');
                $('html').css('--bg', 'rgba(0,0,0,1)');
            console.log("graphicAmoled is active.");
            } else {
                $('#graphicAmoled').removeClass('active');
                $('html').css('--bg', '');
            console.log("graphicAmoled is inactive.");
            }

            if (aimTrainer['graphicSMFont'] === 'active') {
                $('#graphicSMFont').addClass('active');
                $('html').css('--fontRender', 'geometricPrecision');
            console.log("graphicSMFont is active.");
            } else {
                $('#graphicSMFont').removeClass('active');
                $('html').css('--fontRender', '');
            console.log("graphicSMFont is inactive.");
            }





        } else {
            console.log("No saved aimTrainer state found.");
        }
    }
  
    // Function to save the state to localStorage
    function saveState() {
        let aimTrainer = {};
  


        aimTrainer['Points'] = $('#Points').text();
        console.log("Saved Points:", $('#Points').text());

        if ($('#graphicAmoled').hasClass('active')) {
            aimTrainer['graphicAmoled'] = 'active';
        } else {
            aimTrainer['graphicAmoled'] = 'inactive';
        }

        if ($('#graphicSMFont').hasClass('active')) {
            aimTrainer['graphicSMFont'] = 'active';
        } else {
            aimTrainer['graphicSMFont'] = 'inactive';
        }
  




        const jsonString = JSON.stringify(aimTrainer);
        localStorage.setItem('aimTrainer', jsonString);
        // Log to console for testing
        console.log("aimTrainer state saved:", jsonString);
    }
    // Load the state when the page first loads
    loadState();
  
    // Save the state
    setInterval(function() {
        saveState();
        console.log('aimTrainer state saved at ' + new Date().toLocaleTimeString()); // Log save time for testing
    }, 3000);
  
    // Save the state immediately after toggling
    saveState();
});
  