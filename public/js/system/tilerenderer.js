Entropy.Engine.System({
    name: "TileRenderer",
    initialize: function () {



    },
    update: function (delta) {
        var fov = this.engine.getFamily("FoV").one().components;
        var tiles = this.engine.getFamily('Tiles');
        var player = this.engine.getFamily('Players').one().components;

        this.clearFoV();

        tiles.iterate(function (t, tc) {
           this.renderTile(tc, fov);
        }, this);

        this.renderTile(player, fov);
    },
    renderTile: function (components, FoV) {
       

        if (this.isInFoV(components, FoV)) {
            var x = components.position.x - FoV.offset.x;
            var y = components.position.y - FoV.offset.y;

            var tile = TILES[components.tile.sequence[0]] || TILES[0];

            WORLD[x][y][0].innerText = tile;
            WORLD[x][y][0].style.color = components.color.fg;
            WORLD[x][y][0].style.backgroundColor = components.color.bg;

        }
            
    },
    isInFoV: function (components, FoV) {
        var x = components.position.x;
        var y = components.position.y;

        var fromX = FoV.offset.x;
        var toX = FoV.offset.x + Entropy.FOV_WIDTH;
        var fromY = FoV.offset.y;
        var toY = FoV.offset.y + Entropy.FOV_HEIGHT;

        //console.log(fromX, toX, fromY, toY)

        return x >= fromX && x < toX && y >= fromY && y < toY;
    },
    clearFoV: function () {
        for (var x = 0; x < Entropy.FOV_WIDTH; x++) {
            for (var y = 0; y < Entropy.FOV_HEIGHT; y++) {

                WORLD[x][y][0].innerText = TILES[1];
                WORLD[x][y][0].style.color = '#A9E677';
                WORLD[x][y][0].style.backgroundColor = "initial";
                //A9E677
            }
        }
    }
});