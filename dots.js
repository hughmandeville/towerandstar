/*
 * - make sounds
 * - make fade out
 */
var audio_i = 0;
var audio_context = new Array(new AudioContext(), new AudioContext(), new AudioContext());

$(function() {
    if ( ! window.console ) {
        console = { log: function(){} };
    }
    for (var i = 0; i < 10000; i++) {
        var box = "<div class=\"box\"></div>";
        $("#boxes").append(box);
    }

    $(".box").each(function() {
        var grey = get_grey();
        $(this).css("background", grey);
        $(this).data("grey", grey);
        $(this).data("color", get_color());
    });
    $(".box").on("mouseover", function() {
        var box = $(this);        
        $(box).animate({backgroundColor: $(box).data("color")}, 600);
        play_sound();
    });
    $(".box").on("mouseout", function() {
        var box = $(this);
        setTimeout(function() {
            $(box).animate({backgroundColor: $(box).data("grey")}, 500);
        }, 4000);
    });

    $(".box").on("click", play_sound);
});

/**
 * http://marcgg.com/blog/2016/11/01/javascript-audio/
 */
function play_sound()
{
    var frequencies = [
        16.35, 17.32, 18.35, 19.45, 20.60, 21.83, 23.12, 24.50, 25.96, 27.50, 29.14, 30.87,
        32.70, 34.65, 36.71, 38.89, 41.20, 43.65, 46.25, 49.00, 51.91, 55.00, 58.27, 61.74,
        65.41, 69.30, 73.42, 77.78, 82.41, 87.31, 92.50, 98.00, 103.8, 110.0, 116.5, 123.5,
        130.8, 138.6, 146.8, 155.6, 164.8, 174.6, 185.0, 196.0, 207.7, 220.0, 233.1, 246.9,
        261.6, 277.2, 293.7, 311.1, 329.6, 349.2, 370.0, 392.0, 415.3, 440.0, 466.2, 493.9,
        523.3, 554.4, 587.3, 622.3, 659.3, 698.5, 740.0, 784.0, 830.6, 880.0, 932.3, 987.8,
        1047, 1109, 1175, 1245, 1319, 1397, 1480, 1568, 1661, 1760, 1865, 1976,
        2093, 2217, 2349, 2489, 2637, 2794, 2960, 3136, 3322, 3520, 3729, 3951,
        4186, 4435, 4699, 4978, 5274, 5588, 5920, 6272, 6645, 7040, 7459, 7902];

    var context = get_context();
    var o = context.createOscillator();
    o.type = 'sine';
    var frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
    o.frequency.value = frequency;
    var g = context.createGain();
    o.connect(g);
    g.connect(context.destination);
    o.start(0);
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 2);
}

function get_context()
{
    audio_i++;
    if (audio_i >= audio_context.length) {
        audio_i = 0;
    }
    return (audio_context[audio_i]);
}

function set_back(box)
{
    $(box).css("background", $(box).data("grey"));
}
/**
 * Returns a random color.
 * https://material.io/guidelines/style/color.html
 */
function get_color()
{
    var colors = [
        "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#03A9F4", "#009688", "#4CAF50",
        "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#607D8B"
    ];
    return (colors[Math.floor(Math.random() * colors.length)]);
}

function get_grey()
{
    var colors = [
        "#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0"
    ];
    return (colors[Math.floor(Math.random() * colors.length)]);

}

