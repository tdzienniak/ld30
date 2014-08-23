Entropy.Game.State({
    name: "gameplay",
    initialize: function (game, done) {

        /**
         * Generate world;
         */
        
        var worldWrapper = $('.world-table');

        for (var y = 0; y < Entropy.WORLD_HEIGHT; y++) {
            var tr = $('<tr></tr>');
            for (var x = 0; x < Entropy.WORLD_WIDTH; x++) {
                WORLD[x] = WORLD[x] || [];

                var tile = $('<span class="tile"></span>').html('&#x0040;');

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
                game.engine.create(TILE_MAPPER[symbol] || 'EmptyGround', x, y);
            }
        }

        game.engine.create("Player", 5, 5);

        game.engine.addSystem("PlayerControl", 0);
        game.engine.addSystem("TileRenderer", 1);

        game.start();

        done();
    },
    onEnter: function (game, done) {
        $('.gameplay-screen').fadeIn(500, function () {
            done();
        });
    },
     onExit: function (game, done) {
        $('.gameplay-screen').fadeOut(500, function () {
            done();
        });
    }
});