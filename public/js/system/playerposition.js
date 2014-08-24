Entropy.Engine.System({
    name: "PlayerPosition",
    initialize: function () {
        this.xPosField = $('#player-position-x');
        this.yPosField = $('#player-position-y');
    },
    update: function (delta) {
        var player = this.game.engine.getFamily("Players").one().components;
        
        this.xPosField.text(player.position.x);
        this.yPosField.text(player.position.y);
    }
});