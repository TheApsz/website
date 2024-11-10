$(document).ready(function() {
       var audio = $('#audio')[0]; // Ensure the ID matches your audio element
       var durationInterval;
   
       function checkAndSetDuration() {
           if (!isNaN(audio.duration) && audio.duration > 0) {
               var formattedDuration = formatTime(audio.duration);
               $('#max').text(formattedDuration);
               clearInterval(durationInterval); // Stop checking once duration is set
           }
       }
   
       // Start checking for the duration when the audio is ready to play
       audio.oncanplaythrough = function() {
           // Start an interval that checks every 100ms
           durationInterval = setInterval(checkAndSetDuration, 100);
       };
   
       // Update the current time as the audio plays
       audio.ontimeupdate = function() {
           var formattedCurrentTime = formatTime(audio.currentTime);
           $('#min').text(formattedCurrentTime);
   
           // Update the progress bar
           var progressPercentage = (audio.currentTime / audio.duration) * 100;
           $('.sigma .progress').css('width', progressPercentage + '%');
       };
   
       // Toggle play/pause when #pause is clicked
       $('#pause').click(function() {
           if (audio.paused) {
               audio.play();
               $(this).text('Pause');
           } else {
               audio.pause();
               $(this).text('play_arrow');
           }
       });
   
       function formatTime(seconds) {
           var min = Math.floor(seconds / 60);
           var sec = Math.floor(seconds % 60);
           return min + ':' + (sec < 10 ? '0' + sec : sec);
       } 
});


$(document).ready(function() {
    var audio = $('#audio')[0];

    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var source = audioContext.createMediaElementSource(audio);
    var analyser = audioContext.createAnalyser();

    source.connect(analyser);
    analyser.connect(audioContext.destination);

    analyser.fftSize = 256;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);

    var maxHeight = 700;

    function renderFrame() {
        requestAnimationFrame(renderFrame);
        analyser.getByteFrequencyData(dataArray);

        var bassAverage = 0;
        for (var i = 0; i < bufferLength / 2; i++) {
            bassAverage += dataArray[i];
        }
        bassAverage = bassAverage / (bufferLength / 2);

        var sensitivity = 2;
        bassAverage *= sensitivity;

        var visualHeight = (bassAverage / 255) * maxHeight;
        $('#visual').css('height', visualHeight + 'px');

        var visualOpacity = (bassAverage / 255) * 1;
        $('#visual').css('opacity', visualOpacity);
    }

    audio.onplay = function() {
        audioContext.resume();
        renderFrame();
    };
});
   
   
   
   