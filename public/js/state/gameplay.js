Entropy.Game.State({
    name: "gameplay",
    initialize: function (game, done) {

        /**
         * Generate world;
         */
        
        var worldWrapper = $('.world-table');

        for (var y = 0; y < Entropy.FOV_HEIGHT; y++) {
            var tr = $('<tr></tr>');
            for (var x = 0; x < Entropy.FOV_WIDTH; x++) {
                WORLD[x] = WORLD[x] || [];

                var tile = $('<span class="tile"></span>');

                tr.append($('<td></td>').append(tile));

                WORLD[x][y] = tile;

                //worldWrapper.append(tile);
            }

            worldWrapper.append(tr);
        }
        
        console.log('gameplay');

        var level = LEVELS['level-1'];

        var width = level.world[0].length;
        var height = level.world.length;

        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                var symbol = level.world[y][x];
                if (TILE_MAPPER[symbol]) {
                    game.engine.create(TILE_MAPPER[symbol], x, y, symbol);
                }
            }
        }

        game.engine.create("Level", level);
        game.engine.create("Player", 10, 10);
        game.engine.create("FoV", 0, 0);

        game.engine.create("Key", 83, 7, 'The blue box key');
        game.engine.create("Box", 103, 16, 'The blue box');

        game.engine.create("Info", 93, 15, 'My house');
        game.engine.create("Info", 148, 16, 'Disco');

        game.engine.create("Barman", 144, 11);
        //144, 11

        game.engine.create("Hooker", 88, 20);
        //88, 20

        game.engine.addSystem("PlayerControl", 0);
        game.engine.addSystem("PlayerPosition", 1);
        game.engine.addSystem("LabelDisplay", 2);
        game.engine.addSystem("ActionSystem",3);
        game.engine.addSystem("FoVControl", 10);
        game.engine.addSystem("SequenceAnimation", 11);
        game.engine.addSystem("TileRenderer", 20);

        game.ticker.setFPS(15);

        game.start();

        $(window).on('keyup', function (e) {

            if (e.keyCode === 73) {
                console.log('koko')

                if (game.currentState() === 'gameplay') {
                    game.pause();
                    game.changeState('inventory');
                    return;
                }

                if (game.currentState() === 'inventory') {
                    game.changeState('gameplay');
                    return;
                }
            }
        });

        done();
    },
    onEnter: function (game, done) {
        done();
    },
    onExit: function (game, done) {
        console.log('dsdsa')
        done();
    },
    transitions: {
        'choping': 'toChoping'
    },
    toChoping: function (game, next, tree, done) {
        next.tree = tree;
        done();
    }
});