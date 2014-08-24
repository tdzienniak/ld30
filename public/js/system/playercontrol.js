Entropy.Engine.System({
    name: "PlayerControl",
    update: function (delta) {
        var player = this.game.engine.getFamily("Players").one().components;
        var level = this.game.engine.getFamily("Levels").one().components.level.level;
        var pressedKeys = this.game.input.getPressedKeys();

        if (pressedKeys["W"]) {
            var newY = player.position.y - 1;

            try {
                if (IMPASSABLE_TILES.indexOf(level.world[newY][player.position.x]) === -1) {
                    player.position.y = newY;
                }
            } catch (e) {
                player.position.y = newY;
            }
        } else if (pressedKeys["S"]) {
            var newY = player.position.y + 1;

            try {
                if (IMPASSABLE_TILES.indexOf(level.world[newY][player.position.x]) === -1) {
                    player.position.y = newY;
                }
            } catch (e) {
                player.position.y = newY;
            }
        }

        if (pressedKeys["A"]) {
            var newX = player.position.x - 1;

            try {
                //console.log(level.world[newX][player.position.y])
                if (IMPASSABLE_TILES.indexOf(level.world[player.position.y][newX]) === -1) {
                    player.position.x = newX;
                }
            } catch (e) {
                player.position.x = newX;
            }
        } else if (pressedKeys["D"]) {
             var newX = player.position.x + 1;

            try {
                if (IMPASSABLE_TILES.indexOf(level.world[player.position.y][newX]) === -1) {
                    player.position.x = newX;
                }
            } catch (e) {
                player.position.x = newX;
            }
        }
    }
});