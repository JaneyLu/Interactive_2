$(document).ready(function () {
    
    $(".Araki").on({
        mouseenter : function () {
          $(".Araki").addClass("active");
        },
        mouseleave : function () {
          $(".Araki").removeClass("active");
        }
    });  
    
    $(".Moriyama").on({
        mouseenter : function () {
          $(".Moriyama").addClass("active");
        },
        mouseleave : function () {
          $(".Moriyama").removeClass("active");
        }
    }); 
    
    $(".Shiga").on({
        mouseenter : function () {
          $(".Shiga").addClass("active");
        },
        mouseleave : function () {
          $(".Shiga").removeClass("active");
        }
    }); 
    
});