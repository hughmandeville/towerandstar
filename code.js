$(function() {    
    // If browser doesn't support console log (like IE) set to empty function, so don't get errors.
    if ( ! window.console ) {
        console = { log: function(){} };
    }

    $(".bio_expand_collapse").on("click", function() {
        var expand_collapse = $(this).text();
        if (expand_collapse == "expand_more") {
            $(this).text("expand_less");
            $(this).parent().parent().find(".bio").show();
            $(this).attr("title", "collapse");
        } else {
            $(this).text("expand_more");
            $(this).parent().parent().find(".bio").hide();
            $(this).attr("title", "expand");
        }
    });
});
