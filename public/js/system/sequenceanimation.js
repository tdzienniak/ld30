Entropy.Engine.System({
    name: "SequenceAnimation",
    update: function (delta) {
        var tiles = this.engine.getFamily("Tiles");

        tiles.iterate(function (t, tc) {
            //console.log(tc.tile.sequence)
            tc.tile.sequence.push(tc.tile.sequence.shift());
        });
    }
});