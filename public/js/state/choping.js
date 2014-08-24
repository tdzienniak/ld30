Entropy.Game.State({
    name: "choping",
    initialize: function (game, done) {
        this.chopingProgress = 0;
        this.chopingEnd = 300;
        done();
    },
    onEnter: function (game, tree, done) {
        var self = this;

        this.chopingProgress = 0;

        var chopedFirst = false;
        var chopedSecond = false;
        var chopedThird = false;
        var succesColor = '#2F9407';

        var misses = 0;
        var messageBox = $('#choping-text').html('To chop this tree, press E <br />in the right moments. (press E to start)');
        var progressBar = $('#choping-progress').css('width', '0px');
        var firstThreshold = $('#choping-threshold-1').css('background-color', 'black');
        var secondThreshold = $('#choping-threshold-2').css('background-color', 'black');;
        var thirdThreshold = $('#choping-threshold-3').css('background-color', 'black');;
        var firstStart = 10 + Math.round(Math.random() * 80);
        var secondStart = 110 + Math.round(Math.random() * 80);
        var thirdStart = 210 + Math.round(Math.random() * 80);

        firstThreshold.css('left', firstStart + 'px');
        secondThreshold.css('left', secondStart + 'px');
        thirdThreshold.css('left', thirdStart + 'px');

        window.setTimeout(function () {
            $(window).one('keyup', function (e) {
                if (e.keyCode === 69) {
                    self.id = window.setInterval(function () {
                        //var percent = self.currentFishingProgress / self.fishingTreshold;
                        progressBar.css('width', self.chopingProgress + 'px');

                        if (misses >= 4) {
                            window.clearInterval(self.id);
                            $(window).off('keydown', chop);
                            messageBox.text('You missed too many times. Try again.');
                            setTimeout(function () {game.changeState('gameplay')}, 2000);
                            return;
                        }

                        if (self.chopingProgress >= self.chopingEnd) {
                            window.clearInterval(self.id);
                            $(window).off('keydown', chop);

                            if (chopedFirst && chopedSecond && chopedThird) {
                                messageBox.text('You\'ve choped a tree, gz!');
                                INVENTORY['wood'] += 1;
                                game.engine.markForRemoval(tree);
                            } else {
                                messageBox.text('Maybe next time, keep practicing!');
                            }

                            setTimeout(function () {game.changeState('gameplay')}, 2000);
                            return;
                        }

                        self.chopingProgress += 1;
                    }, 1000 / 90);

                    $(window).on('keydown', chop);
                }
            });
        }, 500);

        function chop (e) {
            console.log('chopy')
            if (e.keyCode === 69) {
                var pressPosition = self.chopingProgress;

                if (pressPosition >= firstStart && pressPosition <= firstStart + 10) {
                    //console.log('ok')
                    firstThreshold.css('background-color', succesColor);
                    messageBox.text('Nice!\nFirst chop.');
                    chopedFirst = true;
                } else if (pressPosition >= secondStart && pressPosition <= secondStart + 10) {
                    secondThreshold.css('background-color', succesColor);
                    messageBox.text('Wow!\nYou are awesome lumberjack!');
                    chopedSecond = true;
                } else if (pressPosition >= thirdStart && pressPosition <= thirdStart + 10) {
                    thirdThreshold.css('background-color', succesColor);
                    messageBox.text('Yeah!\nThat\'s it!');
                    chopedThird = true;
                } else {
                    misses += 1;
                }
            }
        }

        $('.choping-screen').addClass("screen-active").animate({opacity: 1}, 500, function () {
            done();
        });
    },
     onExit: function (game, done) {
        game.resume();
        
        $('.choping-screen').animate({opacity: 0}, 500, function () {
            $(this).removeClass("screen-active");
            done();
        });
    }
});