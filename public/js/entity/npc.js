Entropy.Engine.Entity({
    name: "Barman",
    family: "Barmans|Tiles",
    create: function (game, x, y) {
        this.add("Position", x, y)
            .add("Tile", 'o', ['o'])
            .add("Color", '#48FF00','none')
            .add("Label", "Guy behind the bar")
            .add("Passability", false);
    }
});