Entropy.Engine.System({
    name: "PlayerControl",
    update: function (delta) {
        var player = this.game.engine.getFamily("Players").one().components;
        var pressedKeys = this.game.input.getPressedKeys();

        if (pressedKeys["W"]) {
            player.position.y -= 1;
        } else if (pressedKeys["S"]) {
            player.position.y += 1;
        }

        if (pressedKeys["A"]) {
            player.position.x -= 1;
        } else if (pressedKeys["D"]) {
            player.position.x += 1;
        }
    }
});