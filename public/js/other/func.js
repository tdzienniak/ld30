var FUNC = {
     parseLevel:function (lvlObj) {

            var width = lvlObj.world[0].length;
            var height = lvlObj.world.length;
            var world = [];

            for (var x = 0; x < width; x++) {
                world[x] = [];

                for (var y = 0; y < height; y++) {
                    world[x][y] = lvlObj.world[y][x];
                }
            }

            lvlObj.world = world;
            lvlObj.width = width;
            lvlObj.height = height;

            //console.log(lvlObj);
            return lvlObj;
        },

    renderLevel: function (lvlObj) {
            var worldDiv = $("<div></div>");

            for (var y = 0; y < lvlObj.height; y++) {
                for (var x = 0; x < lvlObj.width; x++) {
                    var numPrefix = ("0123456789".indexOf(lvlObj.world[x][y]) !== -1) ? "c" : "";
                    worldDiv.append('<span class="' + numPrefix + lvlObj.world[x][y] + '">&#x' + TILES[lvlObj.world[x][y]] + ';</span>');
                    //console.log("dsadsada");
                }

                worldDiv.append('<br />');
            }

            return worldDiv;
        }
};