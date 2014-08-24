Entropy.Game.State({
    name: "inventory",
    initialize: function (game, done) {
        this.inventoryBox = $('#inventory-box');

        done();
    },
    onEnter: function (game, done) {
        this.inventoryBox.empty();

        for (var name in INVENTORY) {
            var item = INVENTORY[name];

            if (typeof item === 'number') {
                this.inventoryBox.append('<span>' + INVENTORY_NAME[name] + ': ' + item + '</span><br />');
            } else if (item === true) {
                this.inventoryBox.append('<span>' + INVENTORY_NAME[name] + '</span><br />');
            }

        }

        $('.inventory-screen').addClass("screen-active").animate({opacity: 1}, 500, function () {
            done();
        });
    },
     onExit: function (game, done) {
        game.resume();
        
        $('.inventory-screen').animate({opacity: 0}, 500, function () {
            $(this).removeClass("screen-active");
            done();
        });
    }
});