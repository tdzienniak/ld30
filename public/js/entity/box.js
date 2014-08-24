Entropy.Engine.Entity({
    name: "Box",
    family: "Boxes|Tiles",
    create: function (game, x, y, tile) {
        this.add("Position", x, y, tile)
            .add("Tile", tile, [tile])
            .add("Color", '#0022FF', '#94E4FF');
    }
});