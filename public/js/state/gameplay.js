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