
Entropy.Engine.Entity({
    name: "Key",
    family: "Tiles|Keys",
    create: function (game, x, y, label) {
        this.add("Position", x, y)
            .add("Tile", '∞', ['∞'])
            .add("Color", '#888888','none')
            .add("Label", label || 'Key');
    }
});