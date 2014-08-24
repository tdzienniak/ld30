Entropy.Game.State({
    name: "initialize",
    initialize: function (game, done) {
        console.log('initialize');

        Entropy.Const('HORIZONTAL_PADDING', 4);
        Entropy.Const('VERTICAL_PADDING', 4);
        Entropy.Const('FOV_WIDTH', 60);
        Entropy.Const('FOV_HEIGHT', 25);

        game.changeState('menu');
        done();
    }
});