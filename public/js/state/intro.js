Entropy.Game.State({
    name: "intro",
    initialize: function (game, done) {
        console.log('intro');

        $('#skip-intro').click(function () {
            game.changeState('pregameplay');
        });

        done();
    },
    onEnter: function (game, done) {
        $('.intro-screen').addClass("screen-active").animate({opacity: 1}, 500, function () {
            done();
        });
    },
     onExit: function (game, done) {
        $('.intro-screen').animate({opacity: 0}, 500, function () {
            $(this).removeClass("screen-active");
            done();
        });
    }
});