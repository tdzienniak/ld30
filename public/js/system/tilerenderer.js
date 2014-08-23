Entropy.Engine.System({
    name: "TileRenderer",
    initialize: function () {



    },
    update: function (delta) {
        var FoV = {
            fromX: 0,
            toX: 49,
            fromY: 0,
            toY: 19
        };

        var tiles = this.engine.getFamily('Tiles');
        var player = this.engine.getFamily('Players').one().components;

        tiles.iterate(function (t, tc) {
           this.renderTile(tc, FoV);
        }, this);

        this.renderTile(player, FoV);
    },
    renderTile: function (components, FoV) {
        var x = components.position.x;
        var y = components.position.y;

        if (
            x >= FoV.fromX &&
            x <= FoV.toX &&
            y >= FoV.fromY &&
            y <= FoV.toY
        ) {
            var tile = TILES[components.tile.sequence[0]] || TILES[1];

            WORLD[x][y].html('&#x' + tile + ';');
        }
    }
});