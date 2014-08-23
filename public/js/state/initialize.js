Entropy.Game.State({
    name: "initialize",
    initialize: function (game, done) {
        console.log('initialize');

        Entropy.Const('HORIZONTAL_PADDING', 2);
        Entropy.Const('VERTICAL_PADDING', 2);
        Entropy.Const('FOV_WIDTH', 50);
        Entropy.Const('FOV_HEIGHT', 20);

        game.changeState('menu');
        done();
    }
});