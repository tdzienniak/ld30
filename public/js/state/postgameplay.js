Entropy.Game.State({
    name: "postgameplay",
    initialize: function (game, done) {
        done();
    },
    onEnter: function (game, ending, done) {
        game.pause();
        if (ending === 'bad') {
            game.changeState('outro_bad');
        } else {
            game.changeState('outro_good');
        }

        done();
    },
     onExit: function (game, done) {
        $('.gameplay-screen').animate({opacity: 0}, 500, function () {
            $(this).removeClass("screen-active");
            done();
        });
    }
});