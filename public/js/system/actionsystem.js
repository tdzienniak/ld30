Entropy.Engine.System({
    name: "ActionSystem",
    initialize: function () {
        this.labelField = $('#label-text');
    },
    update: function (delta) {
        var player = this.game.engine.getFamily("Players").one().components;
        var pressedKeys = this.game.input.getPressedKeys();
        var less= this.game.input.getKeysPressedLessThan(1000);

        if (pressedKeys["E"] || less["E"]) {
           
            var key = this.canTakeKey(player.position.x, player.position.y);

            if (key) {
                console.log('biorę klucz');
                INVENTORY['blue_box_key'] = true;
                this.engine.markForRemoval(key);

            }


        }
    },
    canTakeKey: function (x, y) {
        var key = this.engine.getFamily('Keys').one();

        if (key != null && (x === key.components.position.x || x === key.components.position.x - 1) && !INVENTORY['blue_box_key']) {
            return key;
        } else {
            return false;
        }
    },
    canCatchFish: function () {

    },
    canChopTree: function (x, y) {
        var trees = this.engine.getFamily('Trees');


    }
});