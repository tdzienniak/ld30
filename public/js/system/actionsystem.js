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
                return;
            }

            if (this.canDoFishing(player.position.x, player.position.y)) {
                this.game.pause();
                this.game.changeState('fishing');
                return;
            }

            var tree = this.canChopTree(player.position.x, player.position.y);

            if (tree) {
                this.game.pause();
                this.game.changeState('choping', tree);
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
    canDoFishing: function (x, y) {
        var rivers = this.engine.getFamily('Rivers');
        var state = this.game.currentState();
        var node = rivers.head;

        while (node !== null) {
            var water = node.data.components;

            if (state !== 'fishing' && INVENTORY['fishing_rod'] && water.position.x === x && (water.position.y === y - 1 || water.position.y === y + 1)) {
                return tree;
            }

            node = node.next;
        }

        return false;

    },
    canChopTree: function (x, y) {
        var trees = this.engine.getFamily('Trees');

        var state = this.game.currentState();
        var node = trees.head;

        while (node !== null) {
            var tree = node.data.components;

            if (state !== 'choping' && INVENTORY['axe'] && tree.position.x === x && (tree.position.y === y - 1 || tree.position.y === y + 1)) {
                return node.data;
            }

            node = node.next;
        }

        return false;
    }
});