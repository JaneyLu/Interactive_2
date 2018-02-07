$(document).ready(function() {

$('#btn63').click(function(ev){
    var randomSize = Math.round((Math.random() * 100) + 1);

    var ad = Math.round((Math.random() * 255) + 0);
    var bd = Math.round((Math.random() * 255) + 0);
    var cd = Math.round((Math.random() * 255) + 0);

    $("body").append(
            $('<div></div>').css({
                position: 'absolute',
                top: ev.pageY + 'px',
                left: ev.pageX + 'px',
                width: randomSize + "px",
                height: randomSize + "px",
                "-moz-border-radius" : "50%",
                "-webkit-border-radius" : "50%",
                "border-radius" : "50%",
                background: "RGB(" + ad + "," + bd + "," + cd + ")"
            })

        );
  });

  });
