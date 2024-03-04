$(document).ready(function(){
    $(".installdark").click(function(){
        // Change the properties you want to animate
        $(":root").css({
            "--bgsep2": "#7e7e7e33",
            "--bgsep": "#00000033",
            "--bg": "#181818",
            "--bg1": "#282828",
            "--out": "#4b4b4b",
            "--txtd": "#c2c2c2",
        });
    });
    $(".installlight").click(function(){
        // Change the properties you want to animate
        $(":root").css({
            "--bgsep2": "#ffffff0d",
            "--bgsep": "#ffffff33",
            "--bg": "#dcdcdc",
            "--bg1": "#adadad",
            "--out": "#c2c2c2",
            "--txtd": "#232323",
        });
    });


    $(".installstartwindow2button1").click(function(){
        // Change the properties you want to animate
        $(".installstartwindow2").css({
            "transition": "scale 0.8s ease, opacity 0.2s ease",
            "opacity": "0",
            "scale": "0.5",
            "pointer-events": "none"
        });
        $(".installstartwindow3").css({
            "transition": "scale 0.8s ease 0.5s, opacity 0.2s ease 0.5s",
            "opacity": "1",
            "scale": "1",
            "pointer-events": "auto"
        });
    });
});
