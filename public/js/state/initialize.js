Entropy.Game.State({
    name: "initialize",
    initialize: function (game, done) {
        console.log('initialize');

        Entropy.Const('WORLD_WIDTH', 50);
        Entropy.Const('WORLD_HEIGHT', 20);

        game.changeState('menu');
        done();
    }
});