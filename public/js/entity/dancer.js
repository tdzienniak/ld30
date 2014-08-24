Entropy.Engine.Entity({
    name: "Dancer",
    family: "Dancers|Tiles",
    create: function (game, x, y, tile) {
        this.add("Position", x, y)
            .add("Tile", tile, TILES[tile])
            .add("Color", '#CC0000');
    }
});