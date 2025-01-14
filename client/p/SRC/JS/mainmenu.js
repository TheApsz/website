$(document).ready(function() {
       // Get the height of .menu-heightcheck
       const menuHeight = $('.menu-heightcheck').height();
   
       // Get the height of .menu-title-heightcheck
       const menuTitleHeight = $('.menu-title-heightcheck').height();
   
       // Calculate the total height
       const totalHeight = menuHeight + 40 + menuTitleHeight;
   
       // Set the CSS variable --mainmenu-big
       $('body').css('--mainmenu-big', totalHeight + 'px');
});

$(document).ready(function() {
       // Get the necessary elements
       const $mainMenu = $('#mainmenu');
       const $menuActions = $mainMenu.find('.menu > .action');
       const $menuBig = $mainMenu.find('.menu-big');
       const $menuBigClose = $menuBig.find('.controls .bigmenu-close');
   
       // Add event listeners
       $menuActions.on('click', toggleActiveClass);
       $menuBigClose.on('click', removeActiveClass);
   
       // Function to toggle the active class
       function toggleActiveClass() {
           $mainMenu.find('title, .menu, .title, .menu-big').addClass('active');
       }
   
       // Function to remove the active class
       function removeActiveClass() {
           $mainMenu.find('title, .menu, .title, .menu-big').removeClass('active');
       }
});
$(document).ready(function() {
       $(".action").click(function() {
         var className = $(this).attr("class");
         var menuTitle = $("#bigmenu-title");
         var menuTitleText = $(this).find("h2").text();
     
         // Remove the "m-" prefix from the class name to get the menu title text
         var menuTitlePrefix = className.replace("action m-", "");
     
         // Update the .bigmenu-title text
         menuTitle.text(menuTitleText);
     
         // Remove the .active class from all .bm elements
         $(".bm").removeClass("active");
     
         // Add the .active class to the corresponding .bm.(anything) element
         $(".bm." + menuTitlePrefix).addClass("active");
       });
});

$(document).ready(function() {
       $(".toggle").click(function() {
              $(this).toggleClass("active");
       });
});

$(document).ready(function() {
       $('#gradient-toggle').on('click', function() {
           $(this).toggleClass('inactive');

           if ($(this).hasClass('active')) {
               $('.txt-gr').addClass('animate');
           } else {
               $('.txt-gr').removeClass('animate');
           }
       });
   });


   $(document).ready(function() {
    $('#border-radius-setting').on('input', function() {
        var value = $(this).val(); // Get the current value of the input
        $(':root').css('--border-radius', value + 'px'); // Set the --border-radius custom property to the value
    });

    $('#font-family-setting').on('input', function() {
        var fontValue = $(this).val(); // Get the current value of the input
        $(':root').css('--font', fontValue); // Set the --font custom property to the value
    });

    $('#border-on-setting').click(function() {
        if ($(this).hasClass('active')) {
            // If the element has the .active class, set --border-on to 0px 0px 0px 1px
            $(':root').css('--border-setting', '0px 0px 0px 1px rgba(255,255,255,0.1)');
        } else {
            // If the element does not have the .active class, set --border-on to 0px 0px 0px 0px
            $(':root').css('--border-setting', '0px 0px 0px 0px rgba(255,255,255,0.1)');
        }
    });
    $('#primary-color-setting').on('input', function() {
        var colorValue = $(this).val(); // Get the current value of the input
        $(':root').css('--primary-manual', colorValue); // Set the --primary-color custom property to the value
    });
});

     
     
   
   
   