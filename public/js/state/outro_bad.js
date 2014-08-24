Entropy.Game.State({
    name: "outro_bad",
    initialize: function (game, done) {
        console.log('outro');

        done();
    },
    onEnter: function (game, done) {
        $('.bad-ending').addClass("screen-active").animate({opacity: 1}, 500, function () {
            done();
        });
    },
     onExit: function (game, done) {
        $('.bad-ending').animate({opacity: 0}, 500, function () {
            $(this).removeClass("screen-active");
            done();
        });
    }
});