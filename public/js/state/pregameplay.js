Entropy.Game.State({
    name: "pregameplay",
    initialize: function (game, done) {
        done();
    },
    onEnter: function (game, done) {
        $('.gameplay-screen').addClass("screen-active").animate({opacity: 1}, 500, function () {
            game.changeState('gameplay');
            done();
        });
    },
     onExit: function (game, done) {
        done();
    }
});