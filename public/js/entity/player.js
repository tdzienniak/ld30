Entropy.Engine.Entity({
    name: "Player",
    family: "Players|Tiles",
    create: function (game, x, y) {
        this.add("Position", x, y)
            .add("Tile", 'o', ['o'])
            .add("Color", '#CC0000','none');
    }
});