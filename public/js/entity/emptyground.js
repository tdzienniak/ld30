Entropy.Engine.Entity({
    name: "EmptyGround",
    family: "Tiles|Ground",
    create: function (game, x, y) {
        this.add("Position", x, y)
            .add("Tile", 1, [1])
            .add("Color", '#000000');
    }
});