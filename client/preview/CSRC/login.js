document.addEventListener('DOMContentLoaded', (event) => {
       
       $(document).on('click', '.login', function() {
           console.log('Button clicked');
           var inputVal1 = $('#username').val();
           var inputVal2 = $('#password').val();
           console.log('Username: ', inputVal1);
           console.log('Password: ', inputVal2);
           if(inputVal1 === 'admin' && inputVal2 === 'admin') {
               $('.section2').css('animation', 'section2off 2s ease');
               $('.section3').css('animation', 'section2 1s ease 0s forwards');
           } else {
               $('.error').css('translate', '0% -230%');
           }
       });
});