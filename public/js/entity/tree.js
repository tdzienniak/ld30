Entropy.Engine.Entity({
    name: "Tree",
    family: "Tiles|Trees",
    create: function (game, x, y) {
        this.add("Position", x, y)
            .add("Tile", 't', ['t'])
            .add("Color", '#000000');
    }
});