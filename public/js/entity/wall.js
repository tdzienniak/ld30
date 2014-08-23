Entropy.Engine.Entity({
    name: "Wall",
    family: "Tiles|Walls",
    create: function (game, x, y, tile) {
        this.add("Position", x, y, tile)
            .add("Tile", tile, [tile])
            .add("Color", '#000000');
    }
});