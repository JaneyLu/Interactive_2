$('document').ready(function() {
    $('document').click(function(n) {
        var n = 0;
        n++;
        $('.container').append('<div class="clicked" style="top: ' + yPos +'px; left:' + xPos + 'px;position: absolute; height: 100px; width: 100px; background-color: purple;">' + n +'</div>');
        console.log(n);
    });
});
