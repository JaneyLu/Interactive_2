$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '0.6in',
			fontSize: '24px',
			borderWidth: '10px'
		}, 1000 );
	});
    
    var button = document.getElementById("clickme"),
    count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};
    
var j= 0;
    $("#j").click(function(){
        j++;
        $("#counter").html(j);
        
    });

});