Entropy.Game.State({
    name: "fishing",
    initialize: function (game, done) {
        this.id = -1;
        this.currentFishingProgress = 0;
        this.fishingTreshold = 500;
        done();
    },
    onEnter: function (game, done) {
        var self = this;
        this.id = -1;
        this.currentFishingProgress = 0;
        var messageBox = $('#fishing-text').html('Water is calm.<br />(tap \'e\' quickly to catch a fish)');
        var progressBar = $('#fishing-progress-current');

        this.id = window.setInterval(function () {
            var percent = this.currentFishingProgress / this.fishingTreshold;
            progressBar.css('width', (percent * 300) + 'px');

            if (percent > 0.2) {
                messageBox.text('Float jerked.');
            }

            if (percent > 0.5) {
                messageBox.text('The fish is huge!!!');
            }

            if (percent > 0.8) {
                messageBox.text('You almost have it!');
            }

            if (this.currentFishingProgress >= this.fishingTreshold) {
                INVENTORY['fish'] += 1;
                window.clearInterval(this.id);
                messageBox.text('Hurra! You\'ve caught a big, fat fish.');
                window.removeEventListener('keyup', fish);
                setTimeout(function () {game.changeState('gameplay')}, 1000);
                return;
            }

            if (this.currentFishingProgress > 0) {
                this.currentFishingProgress -= 1;
            }
        }.bind(this), 1000 / 60);

        window.addEventListener('keyup', fish);

        $('.fishing-screen').addClass("screen-active").animate({opacity: 1}, 500, function () {
            done();
        });

        function fish(e) {
            if (e.keyCode === 69) {
                console.log('fishy');
                self.currentFishingProgress += 15;
            }
        }
    },
     onExit: function (game, done) {
        game.resume();
        
        $('.fishing-screen').animate({opacity: 0}, 500, function () {
            $(this).removeClass("screen-active");
            done();
        });
    }
});