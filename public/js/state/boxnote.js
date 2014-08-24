Entropy.Game.State({
    name: "boxnote",
    initialize: function (game, done) {
        done();
    },
    onEnter: function (game, done) {
        $('#read-note').click(function () {
            game.changeState('gameplay');
        });

        $('.note-screen').addClass("screen-active").animate({opacity: 1}, 500, function () {
            QUEST['read_note'] = true;
            done();
        });
    },
     onExit: function (game, done) {
        game.resume();
        
        $('.note-screen').animate({opacity: 0}, 500, function () {
            $(this).removeClass("screen-active");
            done();
        });
    }
});