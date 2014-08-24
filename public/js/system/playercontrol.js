Entropy.Engine.System({
    name: "PlayerControl",
    update: function (delta) {
        var player = this.game.engine.getFamily("Players").one().components;
        var level = this.game.engine.getFamily("Levels").one().components.level.level;
        var pressedKeys = this.game.input.getPressedKeys();
        var less= this.game.input.getKeysPressedLessThan(1000);
        //console.log(less)
        var tiles = this.engine.getEntitiesWith(['Passability']);

        if (pressedKeys["W"] || less["W"]) {
            var newY = player.position.y - 1;

            if (this.isPassableTile(tiles, player.position.x, newY)) {
                player.position.y = newY;
            }
        } else if (pressedKeys["S"] || less["S"]) {
            var newY = player.position.y + 1;

             if (this.isPassableTile(tiles, player.position.x, newY)) {
                player.position.y = newY;
            }
        }

        if (pressedKeys["A"] || less["A"]) {
            var newX = player.position.x - 1;

            if (this.isPassableTile(tiles, newX, player.position.y)) {
                player.position.x = newX;
            }
        } else if (pressedKeys["D"] || less["D"]) {
             var newX = player.position.x + 1;

            if (this.isPassableTile(tiles, newX, player.position.y)) {
                player.position.x = newX;
            }
        }
    },
    isPassableTile: function (tiles, x, y) {
        for (var i = 0; i < tiles.length; i++) {
            var tile = tiles[i].components;

            if (tile.position.x === x && tile.position.y === y && !tile.passability.passable) {
                return false;
            }
        }

        return true;
    }
});