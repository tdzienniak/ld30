Entropy.Engine.System({
    name: "FoVControl",
    update: function (delta) {
        var player = this.engine.getFamily("Players").one().components;
        var fov = this.engine.getFamily("FoV").one().components;


        if (player.position.x < fov.offset.x + Entropy.HORIZONTAL_PADDING) {
            fov.offset.x = player.position.x - Entropy.HORIZONTAL_PADDING;
        } else if (player.position.x > fov.offset.x + Entropy.FOV_WIDTH - Entropy.HORIZONTAL_PADDING) {
            fov.offset.x = player.position.x + Entropy.HORIZONTAL_PADDING - Entropy.FOV_WIDTH;
        }

        if (player.position.y < fov.offset.y + Entropy.VERTICAL_PADDING) {
            fov.offset.y = player.position.y - Entropy.VERTICAL_PADDING;
        } else if (player.position.y > fov.offset.y + Entropy.FOV_HEIGHT - Entropy.VERTICAL_PADDING) {
            fov.offset.y = player.position.y + Entropy.VERTICAL_PADDING - Entropy.FOV_HEIGHT;
        }

       // console.log(fov.offset.x);
    }
});