var needs_resizing = true;

var members = new Array("amber", "amos", "anthony", "tanya");

$(function() {    
    // If browser doesn't support console log (like IE) set to empty function, so don't get errors.
    if ( ! window.console ) {
        console = { log: function(){} };
    }
    update_band_name();
    // Update band name font size and position, max every 100ms
    setInterval(update_band_name, 100);
    $(window).resize(function() {
        needs_resizing = true;
    });
});


function update_band_name() {
    if (needs_resizing == false) {
        return;
    }
    needs_resizing = false;

    $("#band_name").css("width", "inherit");
    var band_name_width = $("#band_name").width() + 80;
    var photo_width = $("#group_photo").outerWidth(true);

    var font_size = parseInt($("#band_name").css("font-size"));

    
    if (band_name_width > photo_width) {
        while (band_name_width > photo_width) {
            font_size--;
            $("#band_name").css("font-size", font_size);
            band_name_width = $("#band_name").width() + 80;
        }       
    } else if (band_name_width < photo_width) {
        while (band_name_width < photo_width) {
            font_size++;
            $("#band_name").css("font-size", font_size);
            band_name_width = $("#band_name").width() + 80;
        }
    }
    
    $("#band_name").css("width", "100%");
    
    var top = $("#group_photo").position().top + $("#group_photo").outerHeight(true) - $("#band_name").outerHeight(true);
    
    $("#band_name").css("top", top);
    
    //$("#main_image").css("height", $(window).height());
}



//setInterval(update_random_member_image, 1000);
function update_random_member_image() {

    var member_id = Math.floor((Math.random() * 4));
    var pic_id = Math.floor((Math.random() * 3) + 1);
    var member = members[member_id];

    //console.log("update image for member " + member + ", pic " + pic_id);
    $("#" + member + "_img").attr("src","images/" + member + "_" + pic_id + "_1600x1962.jpg");
}
