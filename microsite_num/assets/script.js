$(document).ready(function(){

	//var scrollPos;
	var xPos;
	var yPos;
	var n = 0;


	// check when the user clicks
	$(document).click(function(e){

		n++;
		// store the click position
		xPos = e.pageX;
		yPos = e.pageY;


		// add text to the page where the user clicks
		$('.container').append(
			'<div style="top: ' + yPos +'px; left:' + xPos + 'px; position: absolute; ">' + n + '</div>')

	});

	$(document).click(function(e) {
    $("div").each(function(index) {
      var colorR = Math.floor((Math.random() * 256));
      var colorG = Math.floor((Math.random() * 256));
      var colorB = Math.floor((Math.random() * 256));
      $(this).css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    });

		var myStyles = ["fontFam1", "fontFam2", "fontFam3","fontFam4","fontFam5","fontFam6","fontFam7","fontFam8","fontFam9","fontFam10","fontFam11","fontFam12","fontFam13","fontFam14","fontFam15","fontFam16","fontFam17","fontFam18","fontFam19","fontFam20","fontFam21","fontFam22","fontFam23","fontFam24","fontFam25","fontFam26","fontFam27","fontFam28","fontFam29","fontFam30","fontFam31","fontFam32","fontFam33","fontFam34","fontFam35"];
		$('div').each(function(){ // selects all paragraphs
        var myClass = myStyles[Math.floor(Math.random()*myStyles.length)];  // get a random index from 0 to 2
        $(this).addClass(myClass);
    });

		var myFont = ["fs10", "fs50", "fs100", "fs75", "fs150", "fs30", "fs40"];
		$('div').each(function(){ // selects all paragraphs
        var mySize = myFont[Math.floor(Math.random()*myFont.length)];  // get a random index from 0 to 2
        $(this).addClass(mySize);
    });
	});

});
