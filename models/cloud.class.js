class Cloud extends MoveableObject {


    constructor(x, y, path) {
        super().loadImage(path)
        this.x = x;
        this.y = y;
        this.height = 480;
        this.width = 720;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.x -= 0.16;
            //neue Position nachdem Wolken verschwinden
            if (this.x <= -720) {
                this.x = 2160;
            }
        }, 1000 / 60);
    }



moveLeft() {


}

}