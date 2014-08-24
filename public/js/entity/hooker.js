Entropy.Engine.Entity({
    name: "Hooker",
    family: "Hookers|Tiles",
    create: function (game, x, y) {
        this.add("Position", x, y)
            .add("Tile", '/', TILE_SEQUENCE['/'])
            .add("Color", '#48FF00','none')
            .add("Label", "Hooker")
            .add("Passability", false);
    }
});