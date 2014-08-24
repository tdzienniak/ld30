Entropy.Game.State({
    name: "outro_good",
    initialize: function (game, done) {
        console.log('outro');

        done();
    },
    onEnter: function (game, done) {
        $('.good-ending').addClass("screen-active").animate({opacity: 1}, 500, function () {
            done();
        });
    },
     onExit: function (game, done) {
        $('.good-ending').animate({opacity: 0}, 500, function () {
            $(this).removeClass("screen-active");
            done();
        });
    }
});