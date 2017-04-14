$(function() {
    // If browser doesn't support console log (like IE) set to empty function, so don't get errors.
    if ( ! window.console ) {
        console = { log: function(){} };
    }
    $(".heading").on("click", function() {
        $(this).parent().find(".details").toggle();
        var img = $(this).parent().data("img");
        $("html").css("background-image", "url('images/" + img + "')");
    });
    $(".heading").on("mouseover", function() {
        var img = $(this).parent().data("img");
        $("html").css("background-image", "url('images/" + img + "')");
    });
});


