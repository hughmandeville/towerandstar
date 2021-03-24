var needs_resizing = true;
var selected = null;

$(function () {
  if (!window.console) {
    console = { log: function () {} };
  }
  // YouTube IDs
  const ytIDs = ["0pSCxHU3t54", "E_bcANrhy9c", "pKX3wbSKxF8", "Y3MSQkm3PXY"];
  var rand = Math.floor(Math.random() * ytIDs.length);
  $("#video_iframe").attr(
    "src",
    "http://www.youtube.com/embed/" +
      ytIDs[rand] +
      "?controls=1&fs=1&modestbranding=1"
  );

  update_video_size();
  // Update image size at max every 100ms
  setInterval(update_video_size, 100);
  $(window).resize(function () {
    needs_resizing = true;
  });

  $(".item").on("click", function () {
    if (selected != null) {
      $("#links_" + selected).hide();
    }
    var new_selected = $(this).text();
    if (new_selected == selected) {
      selected = null;
    } else {
      selected = new_selected;
      if (selected != null) {
        $("#links_" + selected).show();
      }
    }
  });
});

function update_video_size() {
  if (needs_resizing == false) {
    return;
  }
  needs_resizing = false;
  $("#video_div").css("height", $(window).height() - 50);
  //console.log("update video size: " + ($(window).height() - 50));
}
