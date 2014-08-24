Entropy.Engine.Entity({
    name: "River",
    family: "Tiles|Rivers",
    create: function (game, x, y, tile) {
        this.add("Position", x, y, tile)
            .add("Tile", tile, [tile])
            .add("Color", '#0022FF', '#94E4FF')
            //.add("Label", 'Watter')
            .add("Passability", false);
    }
});