Entropy.Engine.System({
    name: "SequenceAnimation",
    update: function (delta) {
        var tiles = this.engine.getFamily("Dancers");

        tiles.iterate(function (t, tc) {
            //console.log(tc.tile.sequence)
            var first = tc.tile.sequence.shift();
            tc.tile.sequence.push(first);
        });
    }
});