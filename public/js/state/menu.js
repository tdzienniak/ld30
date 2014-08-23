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
        $('.menu-screen').fadeIn(500, function () {
            done();
        });
    },
     onExit: function (game, done) {
        $('.menu-screen').fadeOut(500, function () {
            done();
        });
    }
});