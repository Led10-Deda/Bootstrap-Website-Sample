$(function(){
var show = false;
    $(".container, .slide").click(function(){
        $(".navbar-collapse").slideUp(500);
        show = false;
    });
    $(".navbar-toggle").click(function(){
    if(show == false) {
        $(".navbar-collapse").slideDown(500);
        show = true;
        }
    else {
        $(".navbar-collapse").slideUp(500);
        show = false;
    }
    });
    $("#search").keyup(function(){
        var word = $(this).val().toLowerCase();
        $(".list-group-item").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(word) >-1);
        });
    });
});
