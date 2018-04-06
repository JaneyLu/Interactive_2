$(document).ready(function(){
    
    $(".Araki").on({
        mouseenter : function() {
          $(".Araki").addClass(".active");
        },
        mouseleave : function() {
          $(".Araki").removeClass(".active");
        }
    });  
    
});