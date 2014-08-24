Entropy.Engine.Entity({
    name: "Box",
    family: "Boxes|Tiles",
    create: function (game, x, y, text) {
        this.add("Position", x, y)
            .add("Tile", 0, [0])
            .add("Color", '#0022FF', '#94E4FF')
            .add("Label", text)
            .add("Passability", false);;
    }
});