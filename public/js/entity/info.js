Entropy.Engine.Entity({
    name: "Info",
    family: "Tiles|Infos",
    create: function (game, x, y, label) {
        this.add("Position", x, y)
            .add("Tile", '≡', ['≡'])
            .add("Color", '#000000','none')
            .add("Label", label || 'Info')
            .add("Passability", false);
    }
});