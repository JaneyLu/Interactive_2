$(document).ready(function () {
    $("#collage").click(function(){
        $(".canvas_1").show();
    });

    $( "#draggable" ).draggable({ cursor: "move", cursorAt: { top: 150, left: 150 } 
    });
    
    $( "#draggable_2" ).draggable({ cursor: "move", cursorAt: { top: 100, left: 90 } 
    });
    
    $( "#draggable_3" ).draggable({ cursor: "move", cursorAt: { top: 200, left: 350 } 
    });
    
    $( "#draggable_4" ).draggable({ cursor: "move", cursorAt: { top: 330, left: 290 } 
    });
    
    $( "#draggable_5" ).draggable({ cursor: "move", cursorAt: { top: 150, left: 160 } 
    });
    
    $( "#draggable_6" ).draggable({ cursor: "move", cursorAt: { top: 150, left: 160 } 
    });
    
    $( "#draggable_7" ).draggable({ cursor: "move", cursorAt: { top: 150, left: 160 } 
    });
    
    $( "#draggable_8" ).draggable({ cursor: "move", cursorAt: { top: 250, left: 460 } 
    });
});