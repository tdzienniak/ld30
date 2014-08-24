Entropy.Engine.Entity({
    name: "Path",
    family: "Tiles|Paths",
    create: function (game, x, y, tile) {
        this.add("Position", x, y, tile)
            .add("Tile", tile, [tile])
            .add("Color", '#704418', '#EDCFAF');
    }
});