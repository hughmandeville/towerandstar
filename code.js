var audio_i = 0;
var audio_context = null;
var preloaded_images = new Array();

var pages = [
    {
        "id"    : "ts",
        "name"  : "TOWER + STAR",
        "img"   : "images/band_bg_8.jpg",
        "thumb" : "images/band_thumb_8.jpg",
        "role"  : "Brooklyn, NY",
        "text"  : "<b>TOWER + STAR</b> is mystical, catchy, flutey, piano driven ROCK. The band is currently recording their first album, &quot;We Have Hope for the Hopeless&quot;, to be released Summer of 2017. Their first single , &quot;Regenerator&quot; is due for release this April. The bandmates are: Tanya Donovan on piano and vocals, Amber Dawn Watson on flute and backup vocals, Amos Fisher on drums, clarinet and backup vocals and Paul Alexandre Meurens on bass guitar, bass clarinet and backup vocals.",
        "href"   : "",
        "html"   : ""
    },
    {
        "id"     : "tanya",
        "name"   : "Tanya Donovan",
        "img"    : "images/tanya_bg_2.jpg",
        "thumb"  : "images/tanya_thumb_2.jpg",
        "role"   : "vocals & piano",
        "text"   : "Tanya is the visionary and  force behind TOWER + STAR and its primary singer and songwriter. She has performed punk, rockabilly, prog rock and improvisational theatre. She now spends days and nights with her head inside her ancient piano, collaborating with her bandmates to create alt rock with a classical tinge; music about spirit and transformation but not without sex and shadow. She holds a Bachelors of Theatre Arts from New York University’s Tisch School of the Arts.",
        "href"   : "",
        "html"   : ""
    },
    {
        "id"     : "amos",
        "name"   : "Amos Fisher",        
        "img"    : "images/amos_bg_2.jpg",
        "thumb"  : "images/amos_thumb_2.jpg",
        "role"   : "drums & clarinet",
        "text"   : "Amos has been playing, writing, studying, and teaching music for twenty five years: concert band, marching band, jazz band, experimental punk rock, classical music, songwriting, wordless multi-movement suites for guitar, avant-garde improvisation, fusion covers, solos of baroque and romantic classics, eastern-influenced meditation music, film and theater music, epic stage melodrama-yes, all of that! He holds a Bachelor’s Degree of Music from the North Carolina School of The Arts. Amos has just finished recording his debut album &quot;Anomalies&quot; &amp; completed a <a href=\"https://www.kickstarter.com/projects/1351321972/debut-album-anomalies-by-the-anomylos-ensemble\">Kickstarter campaign to fund payroll for a virtual orchestra of musicians</a>.",
        "href"   : "",
        "html"   : ""
    },      
    {
        "id"     : "amber",
        "name"   : "Amber Dawn Watson",
        "img"    : "images/amber_bg_2.jpg",
        "thumb"  : "images/amber_thumb_2.jpg",
        "role"   : "flute &amp; backup vocals",
        "text"   : "Hailing from middle America, Amber loves the city and the music within. The muse is a bassy beat and she injects fuel into her veins. We dance but it's never enough for our Amber. Amber sings, plays flute and guitar ... and has dabbled in playing cornet. Classically trained, she has read and felt music, but not until she  came to the city in 2008 did she create. Current projects include fronting <a href=\"https://whatpreytell.bandcamp.com\">What Prey Tell</a> and running a DIY recording studio. She’s dipped her toe into sound design for film and continues endeavoring in sound ...",
        "href"   : "",
        "html"   : ""
    },      
    {
        "id"     : "paul",
        "name"   : "Paul Alexandre Meurens",
        "img"    : "images/paul_bg_2.jpg",
        "thumb"  : "images/paul_thumb_2.jpg",
        "role"   : "fretless electric bass &amp; bass clarinet",
        "text"   : "Paul has two decades of experience from the underground clubs of Germany and Belgium to the hype of Brooklyn and Manhattan, playing electric bass, sax, bass clarinet, cheap toys, phone apps, ectoplasmic radios and ethnic instruments treated with electronics for multidimensional sound. Besides playing and recording with TOWER + STAR, he’s also composing, recording and co-producing the upcoming album of the legendary orchestra M'lumbo with Helmet's frontman Page Hamilton. Keeping up with the 21st Century, he also offers online gigs as a session musician and engineers, mixes and performs for various singers and instrumentalists, such as Yaelle Dray, Ludwig Persik, Golden Hands and Jarek Szczyglak.  Paul also composes his own form of ambient/meditation music. <br/><br/><a href=\"http://soundcloud.com/paulax\">paulax on soundcloud</a> | <a href=\"https://soundbetter.com/profiles/14371-paul-meurens\">14371-paul-meurens on soundbetter</a> | <a href=\"http://www.fiverr.com/polychoc\">polychoc on fiverr</a>",
        "href"   : "",
        "html"   : ""
    },
    {
        "id"     : "social",
        "name"   : "Social Media",
        "img"    : "images/band_bg_9.jpg",
        "thumb"  : "images/logo_social.png",
        "role"   : "",
        "text"   : "<a href=\"https://www.facebook.com/TOWER-STAR-1090591630998601/\"><img class=\"social_logo\" src=\"images/logo_facebook.png\" title=\"Facebook\"/></a> <a href=\"https://www.instagram.com/tower_and_star/\"><img class=\"social_logo\" src=\"images/logo_instagram.png\" title=\"Instagram\"/></a><a href=\"https://www.pinterest.com/towerandstar/\"><img class=\"social_logo\" src=\"images/logo_pinterest.png\" title=\"Pinterest\"/></a><br/><a href=\"https://w.soundcloud.com/player/?url=https://soundcloud.com/tanyadonovan\"><img class=\"social_logo\" src=\"images/logo_soundcloud.png\" title=\"Soundcloud\"/></a> <a href=\"https://www.youtube.com/channel/UCa4PzeYqVtM4oqG0pnNABqw\"><img class=\"social_logo\" src=\"images/logo_youtube.png\" title=\"YouTube\"/></a>",
        "href"   : "",
        "html"   : ""
    }
];

$(function() {
    if ( ! window.console ) {
        console = { log: function(){} };
    }
    try {
        // Fix up for prefixing
        window.AudioContext = window.AudioContext||window.webkitAudioContext;
        audio_context = new Array(new AudioContext(), new AudioContext(), new AudioContext());
    } catch(e) {
        console.log('Web Audio API is not supported in this browser.' + e.getMessage());
    }
    
    
    for (var i in pages) {
        var page = pages[i];
        var nav_box = "<div class=\"nav_box\" data-index=\"" + i + "\"><img src=\"" + page['thumb'] +
            "\" title=\"" + page['name'] + "\" alt=\"" + page['name'] + "\"/></div>";
        $("#nav_boxes").prepend(nav_box);
        // preload the images
        preloaded_images[i] = new Image();
        preloaded_images[i].src = page['img'];
    }
    
    for (var i = 0; i < 600; i++) {
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
        }, 2000);
    });

    $(".box").on("click", play_sound);

    $(".nav_box").on("mouseover", function() {
        var page = pages[$(this).data("index")];
        console.log("html: ", page['html']);
        if (page['html'] == "") {
            $("#content").html("");
            $("#content").hide();
        } else {
            $("#content").html(page['html']);
            $("#content").show();
        }

        $("html").css("background-image", "url('" + page['img'] + "')");
        var html = "<div class=\"name\">" + page['name'] + "</div>" +
            "<div class=\"role\">" + page['role'] + "</div>" +
            "<div class=\"text\">" + page['text'] + "</div>";        
        $("#notes").html(html);

        play_sound();
    });
    $(".nav_box").on("click", function() {
        play_sound();        
        var page = pages[$(this).data("index")];
        if (page['href'] != "") {
            window.location.href = page['href'];
        }       
        $(".text").toggle();
    });

    
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
    if (context != null) {
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
}

function get_context()
{
    if (audio_context == null) {
        return null;
    }
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
        "rgba(244, 67, 54, 0.7)",
        "rgba(233, 30, 99, 0.7)",
        "rgba(156, 39, 176, 0.7)",
        "rgba(103, 58, 183, 0.7)",
        "rgba(63, 81, 181, 0.7)",
        "rgba(33, 150, 243, 0.7)",
        "rgba(3, 169, 244, 0.7)",
        "rgba(0, 188, 212, 0.7)",
        "rgba(0, 150, 136, 0.7)",
        "rgba(76, 175, 80, 0.7)",
        "rgba(139, 195, 74, 0.7)",
        "rgba(205, 220, 57, 0.7)",
        "rgba(255, 235, 59, 0.7)",
        "rgba(255, 193, 7, 0.7)",
        "rgba(255, 152, 0, 0.7)",
        "rgba(255, 87, 34, 0.7)",
        "rgba(121, 85, 72, 0.7)",
        "rgba(158, 158, 158, 0.7)",
        "rgba(96, 125, 139, 0.7)"
    ];
    return (colors[Math.floor(Math.random() * colors.length)]);
}

function get_grey()
{
    var colors = [
        "transparent",
        "transparent",
        "transparent",
        "transparent",
        "transparent",
        "transparent",
        "transparent",
        "transparent",
        "transparent",
        "transparent",
        "rgba(255, 255, 255, 0.1)",
        "rgba(255, 255, 255, 0.1)",
        "rgba(255, 255, 255, 0.1)",
        "rgba(255, 255, 255, 0.1)",
        "rgba(255, 255, 255, 0.2)",
    ];
    return (colors[Math.floor(Math.random() * colors.length)]);
}

