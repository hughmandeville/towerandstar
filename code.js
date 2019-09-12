var needs_resizing = true;

$(function() {
    if ( ! window.console ) {
        console = { log: function(){} };
    }
    var rand = Math.floor((Math.random() * 2));
    if (rand == 0) {
        $("#video_iframe").attr("src", "http://www.youtube.com/embed/pKX3wbSKxF8?controls=1&fs=1&modestbranding=1");
    }
    update_video_size();
    // Update image size at max every 100ms
    setInterval(update_video_size, 100);
    $(window).resize(function() {
        needs_resizing = true;
    });

    $("#links").on("click", function() {
	    $("#social").toggle();
    });
});


function update_video_size() {
    if (needs_resizing == false) {
        return;
    }
    needs_resizing = false;
    $("#video_div").css("height", ($(window).height() - 50));
    console.log("update video size: " + ($(window).height() - 50));
}

