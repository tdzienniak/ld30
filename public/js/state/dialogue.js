Entropy.Game.State({
    name: "dialogue",
    initialize: function (game, done) {
        this.dialogueBox = $('#dialogue-box');
        done();
    },
    onEnter: function (game, dialogue, done) {
        var self = this;
        
        var dialogueArray = DIALOGUE[dialogue];

        var index = 1;

        var personBox = $('#dialogue-person');
        var textBox = $('#dialogue-text');

        personBox.text(dialogueArray[0].person);
        textBox.text(dialogueArray[0].text);

        var continueLink = $('#dialogue-next');

        continueLink.on('click', next);

        function next () {
            if (index < dialogueArray.length) {
                personBox.text(dialogueArray[index].person);
                textBox.text(dialogueArray[index].text);
                index += 1;
            } else {
                QUEST[dialogue] = true;

                if (dialogue === 'barman_1') {
                    INVENTORY['fishing_rod'] = true;
                } else if (dialogue === 'barman_2') {
                    INVENTORY['fish'] = 0;
                    INVENTORY['hatchet'] = true;
                } else if (dialogue === 'barman_3') {
                    INVENTORY['wood'] = 0;
                    INVENTORY['nuclear_bomb'] = true;
                } else if (dialogue === 'hooker_2') {
                    game.changeState('postgameplay', 'good');
                }

                continueLink.off('click', next);
                game.changeState('gameplay');
            }
        }

        this.dialogueBox.fadeIn(500, function () {
            done();
        });
    },
     onExit: function (game, done) {
        this.dialogueBox.fadeOut(500, function () {
            game.resume();
            done();
        })
    }
});