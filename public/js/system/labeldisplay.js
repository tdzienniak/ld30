Entropy.Engine.System({
    name: "LabelDisplay",
    initialize: function () {
        this.labelField = $('#label-text');
    },
    update: function (delta) {
        var player = this.game.engine.getFamily("Players").one().components;
        var labeledTiles = this.engine.getEntitiesWith(['Label', 'Tile']);

        this.labelField.text('');

        for (var i = 0; i < labeledTiles.length; i++) {
            var tilePosition = labeledTiles[i].components.position;
            var tileLabel = labeledTiles[i].components.label;
            if (
                player.position.x + 1 === tilePosition.x && player.position.y === tilePosition.y ||
                player.position.x - 1 === tilePosition.x && player.position.y === tilePosition.y ||
                player.position.x  === tilePosition.x && player.position.y + 1 === tilePosition.y ||
                player.position.x  === tilePosition.x && player.position.y - 1 === tilePosition.y ||
                player.position.x  === tilePosition.x && player.position.y === tilePosition.y
            ) {
                //console.log('dsd')
                this.labelField.text(tileLabel.text);
                break;
            }
        }
    }
});