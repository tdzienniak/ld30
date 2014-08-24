Entropy.Game.State({
    name: "postgameplay",
    initialize: function (game, done) {
        done();
    },
    onEnter: function (game, done) {
        done();
    },
     onExit: function (game, done) {
        $('.gameplay-screen').animate({opacity: 0}, 500, function () {
            $(this).removeClass("screen-active");
            done();
        });
    }
});