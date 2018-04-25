$(document).ready(function () {
    $("#collage").click(function(){
        $(".canvas_1").show();
    });

    $( "#draggable" ).draggable({ cursor: "move", cursorAt: { top: 150, left: 150 } 
    });
    
    $( "#draggable_2" ).draggable({ cursor: "move", cursorAt: { top: 100, left: 430 } 
    });
    
    $( "#draggable_3" ).draggable({ cursor: "move", cursorAt: { top: 100, left: 600 } 
    });
    
    $( "#draggable_4" ).draggable({ cursor: "move", cursorAt: { top: 500, left: 240 } 
    });
    
    $( "#draggable_5" ).draggable({ cursor: "move", cursorAt: { top: 450, left: 460 } 
    });
    
    $( "#draggable_6" ).draggable({ cursor: "move", cursorAt: { top: 450, left: 600 } 
    });
    
    $( "#draggable_7" ).draggable({ cursor: "move", cursorAt: { top: 600, left: 700 } 
    });
    
    $( "#draggable_8" ).draggable({ cursor: "move", cursorAt: { top: 820, left: 170 } 
    });
    
    $(".nmark").click(function(){
        $("#content_1").fadeOut(250);
    });
    
    $("#dbl_1").dblclick(function(){
        $("#content_1").fadeIn(500);
    });
    
    $("#dbl_1").dblclick(function(){
        $("#content_1 .nmark").show();
    });
    
    $("#content_1 .nmark").click(function(){
        $("#content_1 .nmark").hide();
    });
    
      $("#content_2 .nmark").click(function(){
        $("#content_2").fadeOut(250);
    });
    
    $("#dbl_2").dblclick(function(){
        $("#content_2").fadeIn(500);
    });
    
    $("#dbl_2").dblclick(function(){
        $("#content_2 .nmark").show();
    });
    
    $("#content_2 .nmark").click(function(){
        $("#content_2 .nmark").hide();
    });
    
    $("#content_3 .nmark").click(function(){
        $("#content_3").fadeOut(250);
    });
    
    $("#dbl_3").dblclick(function(){
        $("#content_3").fadeIn(500);
    });
    
    $("#dbl_3").dblclick(function(){
        $("#content_3 .nmark").show();
    });
    
    $("#content_3 .nmark").click(function(){
        $("#content_3 .nmark").hide();
    });
    
});