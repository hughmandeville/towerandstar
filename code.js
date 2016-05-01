

var members = new Array("amber", "amos", "anthony", "tanya");

$(function() {    
    setInterval(update_random_member_image, 1000);
});

function update_random_member_image() {

    var member_id = Math.floor((Math.random() * 4));
    var pic_id = Math.floor((Math.random() * 3) + 1);
    var member = members[member_id];

    //console.log("update image for member " + member + ", pic " + pic_id);
    $("#" + member + "_img").attr("src","images/" + member + "_" + pic_id + "_1600x1962.jpg");
}
