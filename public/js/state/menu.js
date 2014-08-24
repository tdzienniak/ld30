Entropy.Game.State({
    name: "menu",
    initialize: function (game, done) {
        console.log('menu');

        $('#begin-link').click(function () {
            game.changeState('gameplay');
        });

        done();
    },
    onEnter: function (game, done) {
        $('.menu-screen').addClass("screen-active").animate({opacity: 1}, 500, function () {
            done();
        });
    },
     onExit: function (game, done) {
        $('.menu-screen').animate({opacity: 0}, 500, function () {
            $(this).removeClass("screen-active");
            done();
        });
    }
});