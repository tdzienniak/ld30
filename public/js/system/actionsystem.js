Entropy.Engine.System({
    name: "ActionSystem",
    initialize: function () {
        this.labelField = $('#label-text');
    },
    update: function (delta) {
        var player = this.game.engine.getFamily("Players").one().components;
        var pressedKeys = this.game.input.getPressedKeys();
        var less= this.game.input.getKeysPressedLessThan(1000);

        if (pressedKeys.E || less.E) {

            if (this.canTalkToHooker1(player.position.x, player.position.y)) {
                this.game.pause();
                this.game.changeState('dialogue', 'hooker_1');

                return;
            }

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
                return;
            }

            if (this.canReadNote(player.position.x, player.position.y)) {
                this.game.pause();
                this.game.changeState('boxnote');
                return;
            } 

            if (this.canTalkToBarman1(player.position.x, player.position.y)) {
                this.game.pause();
                this.game.changeState('dialogue', 'barman_1');

                return;
            }

            if (this.canTalkToBarman2(player.position.x, player.position.y)) {
                this.game.pause();
                this.game.changeState('dialogue', 'barman_2');

                return;
            }

            if (this.canTalkToBarman3(player.position.x, player.position.y)) {
                this.game.pause();
                this.game.changeState('dialogue', 'barman_3');

                return;
            }

            if (this.canPutNuclearBomb(player.position.x, player.position.y)) {
                this.game.pause();
                this.game.changeState('postgameplay', 'bad');
                return;
            }

            if (this.canTalkToHooker2(player.position.x, player.position.y)) {
                this.game.pause();
                this.game.changeState('dialogue', 'hooker_2');

                return;
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
                return true;
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

            if (state !== 'choping' && INVENTORY['hatchet'] && tree.position.x === x && (tree.position.y === y - 1 || tree.position.y === y + 1)) {
                return node.data;
            }

            node = node.next;
        }

        return false;
    },
    canReadNote: function (x, y) {
        var box = this.engine.getFamily('Boxes').one().components;

        if (Math.ceil(FUNC.distance(x, y, box.position.x, box.position.y)) === 1 && !QUEST['read_note'] && INVENTORY['blue_box_key']) {
            return true;
        }

        return false;

    },
    canTalkToBarman1: function (x, y) {
        var barman = this.engine.getFamily('Barmans').one().components;

        if (Math.ceil(FUNC.distance(x, y, barman.position.x, barman.position.y)) === 1 && QUEST['read_note'] && !QUEST['barman_1']) {
            return true;
        }

        return false;
    },
    canTalkToBarman2: function (x, y) {
        var barman = this.engine.getFamily('Barmans').one().components;

        if (Math.ceil(FUNC.distance(x, y, barman.position.x, barman.position.y)) === 1 && QUEST['barman_1'] && !QUEST['barman_2'] && INVENTORY['fish'] >= 5) {
            return true;
        }

        return false;
    },
    canTalkToBarman3: function (x, y) {
        var barman = this.engine.getFamily('Barmans').one().components;

        if (Math.ceil(FUNC.distance(x, y, barman.position.x, barman.position.y)) === 1 && QUEST['barman_2'] && !QUEST['barman_3'] && INVENTORY['wood'] >= 10) {
            return true;
        }

        return false;
    },
    canPutNuclearBomb: function (x, y) {
        var box = this.engine.getFamily('Boxes').one().components;

        if (Math.ceil(FUNC.distance(x, y, box.position.x, box.position.y)) === 1 && INVENTORY['nuclear_bomb']) {
            return true;
        }

        return false;
    },
    canTalkToHooker1: function (x, y) {
        var hooker = this.engine.getFamily('Hookers').one().components;

        if (Math.ceil(FUNC.distance(x, y, hooker.position.x, hooker.position.y)) === 1 && !INVENTORY['nuclear_bomb']) {
            return true;
        }

        return false;
    },
     canTalkToHooker2: function (x, y) {
        var hooker = this.engine.getFamily('Hookers').one().components;

        if (Math.ceil(FUNC.distance(x, y, hooker.position.x, hooker.position.y)) === 1 && INVENTORY['nuclear_bomb']) {
            return true;
        }

        return false;
    }
});