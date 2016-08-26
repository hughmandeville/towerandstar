$(function() {    
    // If browser doesn't support console log (like IE) set to empty function, so don't get errors.
    if ( ! window.console ) {
        console = { log: function(){} };
    }

});


var image_id = 1;
function update_images() {
    var post = "c_";

    console.log("update images");
    for (i=1; i <= 6; i++) {
        $(".box" + i).css("background-image", "url('images/tanya_rose_c_" + (((image_id + i) % 6) + 1) + ".jpg')");
    }
    image_id++;
}
