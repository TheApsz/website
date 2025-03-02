$(window).on('load', function() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

    // Function to generate a single random character
    function getRandomChar() {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Function to generate a bad span with 3 random characters
    function generateBadSpan() {
        return `<span class="bad">${getRandomChar()}${getRandomChar()}${getRandomChar()}</span>`;
    }

    // Function to generate the challenge string
    function createChallengeString() {
        let challengeHtml = '';
        let realChars = '';

        for (let i = 0; i < 25; i++) { // Generate 5 real characters
            const realChar = getRandomChar();
            realChars += realChar; // Store correct sequence
            challengeHtml += `<span class="real">${realChar}</span>${generateBadSpan()}`;
        }

        return { challengeHtml, realChars };
    }

    // Generate the challenge and store the correct answer
    const { challengeHtml, realChars } = createChallengeString();
    $('#game1-challange').html(challengeHtml);

    // Function to check if the typed input matches the real characters
    function checkAnswer() {
        const typedAnswer = $('#game1-answer').val().replace(/\s+/g, ''); // Ignore spaces

        if (typedAnswer === realChars) {
            $('#game1-verify').css({
                'opacity': 1,
                'pointer-events': 'auto'
            });
        }
    }

    // Check the answer every 100ms
    setInterval(checkAnswer, 100);
});