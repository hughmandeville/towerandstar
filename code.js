var needs_resizing = true;

var members = {
    "amber"   : "Hailing from middle America, Amber loves the city and the music within.  The muse is a bassy beat and she injects fuel into her veins.  We dance but it's never enough for our Amber.  Amber sings, plays flute and guitar ... and has dabbled in playing cornet.  Classically trained, she has read and felt music, but not until she  came to the city in 2008 did she create.  Current projects include fronting <a href='https://whatpreytell.bandcamp.com'>What Prey Tell</a> and running a DIY recording studio.  She’s dipped her toe into sound design for film and continues endeavoring in sound ...",
    "anthony" : "Anthony resides in Bellville New Jersey and is the only member of the band not hanging in Brooklyn.  He’s into Rock, Heavy Progressive, Progressive Metal, Alternative Rock, Classic Rock and Blues and has spent many a night and afternoon songwriting and playing with his brother Zachary and Tanya in the prog rock band <a href='https://www.facebook.com/ninthparadigm'>Ninth Paradigm</a>.",
    "tanya"   : "Tanya Donovan is the creator, writer and concept diva of TOWER + STAR.  She has dabbled in improvisation, punk, rockabilly and prog rock and is now in full force writing music and lyrics and collaborating with her very talented bandmates to create rock fusion with a classical tinge...in a spiritual light...but not without sex and shadow.  Tanya plays piano and sings for this band and is stumbling towards learning to play (one of Amber’s) cornets - in case the band should need a brassy solo one day.  She holds a Bachelors of Theatre Arts from New York University.  Every song she writes aims to inspire self-reflection &amp; transmutation, from Tower to Star.",
    "amos"    : "Amos has been playing, writing, studying, and teaching music for twenty five years: concert band, marching band, jazz band, experimental punk rock, classical music, songwriting, wordless multi-movement suites for guitar, avant-garde improvisation, fusion covers, solos of baroque and romantic classics, eastern-influenced meditation music, film and theater music, epic stage melodrama-yes, all of that!   He holds a Bachelor’s Degree of Music from the North Carolina School of The Arts.  Amos has just finished recording his debut album &quot;Anomalies&quot; &amp; completed a <a href='https://www.kickstarter.com/projects/1351321972/debut-album-anomalies-by-the-anomylos-ensemble'>Kickstarter campaign to fund payroll for a virtual orchestra of musicians</a>."
}

$(function() {    
    // If browser doesn't support console log (like IE) set to empty function, so don't get errors.
    if ( ! window.console ) {
        console = { log: function(){} };
    }

    $(".member_item").on("click", function() {
        if ($(this).data("type") == "img") {
            var img_src = $(this).find("img").attr("src");
            $(this).closest(".member").find(".member_main .member_info").html('<img src="' + img_src + '"/>');
        } else if ($(this).data("type") == "bio") {
            $(this).closest(".member").find(".member_main .member_info").html('<div class="bio"><div class="bio_spacer"></div>' + members[$(this).data("name")] + '</div>');
        }
    });

});






//setInterval(update_random_member_image, 1000);
function update_random_member_image() {

    var member_id = Math.floor((Math.random() * 4));
    var pic_id = Math.floor((Math.random() * 3) + 1);
    var member = members[member_id];

    //console.log("update image for member " + member + ", pic " + pic_id);
    $("#" + member + "_img").attr("src","images/" + member + "_" + pic_id + "_1600x1962.jpg");
}
