$('document').ready(function() {
    var n = 0;
    $('.container').click(function() {
        n++;
        $('.container').html(n);
        console.log(n);
    });
});
