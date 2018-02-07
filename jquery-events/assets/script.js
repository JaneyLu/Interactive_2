$(document).ready(function(){
	
	var scrollPos;
	var xPos;
	var yPos;
	var winWidth;
	var winHeight;

	// check when the mouse moves
	$(document).mousemove(function(e){
		
		// update mouse x and y position
		xPos = e.pageX;
		yPos = e.pageY;
		$('#mouse-pos').html('x-pos: ' + xPos + '<br />y-pos: ' + yPos);

	});


	// check when the user clicks
	$(document).click(function(e){
		
		// store the click position
		xPos = e.pageX;
		yPos = e.pageY;

		// add text to the page where the user clicks
		$('.container').append('<div style="top: ' + yPos +'px; left:' + xPos + 'px; position: absolute">' + xPos + ', ' + yPos + '</div>')

	});	
    

    
    $("button").click(function(){
        $('#element').animate({left: '500px'});   
    });

});