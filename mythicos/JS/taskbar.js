$(document).ready(function() {
       let hoverTimeout;

       $('#taskbar2').hover(
           function() {
               clearTimeout(hoverTimeout);
               $(this).removeClass('inactive').addClass('active');
           },
           function() {
               hoverTimeout = setTimeout(() => {
                   $(this).removeClass('active').addClass('inactive');
               }, 2000);
           }
       );

        $('#taskbar .item').on('mousedown', function() {
        $(this).css('transform', 'scale(0.8)');
        });

        $(document).on('mouseup', function() {
            $('#taskbar .item').css('transform', 'scale(1)');
        });

        function updateTime() {
            const now = new Date();
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const month = months[now.getMonth()];
            const day = now.getDate();
            const year = now.getFullYear();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            const strMinutes = minutes < 10 ? '0' + minutes : minutes;
            
            const dateStr = `${month} ${day} ${year}`;
            const timeStr = `${hours}:${strMinutes}${ampm}`;
            
            document.getElementById('date').innerText = dateStr;
            document.getElementById('time').innerText = timeStr;
        }
    
        setInterval(updateTime, 1000);
        updateTime();
});