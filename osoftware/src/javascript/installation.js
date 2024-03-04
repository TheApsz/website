$(document).ready(function(){
    $(".installstartwindow1button1").click(function(){
        // Change the properties you want to animate
        $(".installstartwindow1").css({
            "transition": "scale 0.8s ease, opacity 0.2s ease",
            "opacity": "0",
            "scale": "0.5",
            "pointer-events": "none"
        });
        $(".installstartwindow2").css({
            "transition": "scale 0.8s ease 0.5s, opacity 0.2s ease 0.5s",
            "opacity": "1",
            "scale": "1",
            "pointer-events": "auto"
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

    $(".installstartwindow3button1").click(function(){
        $(".installstartwindow3").css({
            "transition": "scale 0.8s ease, opacity 0.2s ease",
            "opacity": "0",
            "scale": "0.5",
            "pointer-events": "none"
        });
        $(".installstartwindow4").css({
            "transition": "scale 0.8s ease 0.5s, opacity 0.2s ease 0.5s",
            "opacity": "1",
            "scale": "1",
            "pointer-events": "auto",
            "animation": "installfinish forwards ease-in-out 0.5s 5s"
        });

        $(".desktop").css({
            "opacity": "0",
            "pointer-events": "auto",
            "animation": "installfinish forwards ease-in-out 0.5s 5s"
        });
    });
});
