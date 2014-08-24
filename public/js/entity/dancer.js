Entropy.Engine.Entity({
    name: "Dancer",
    family: "Dancers|Tiles",
    create: function (game, x, y, tile, label) {
        console.log(TILES[tile]);
        this.add("Position", x, y)
            .add("Tile", tile, TILE_SEQUENCE[tile] || [tile])
            .add("Color", '#CC0000')
            .add("Label", label || "Dancer")
            .add("Passability", false);;
    }
});