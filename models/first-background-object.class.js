class FirstBackgroundObject extends BackgroundObject {
    
    constructor(x, y, path) {
        super().loadImage(path)
        this.x = x;
        this.y = y;
        this.height = 480;
        this.width = 720;
//        this.animate();
    }
    
//    animate() {
//        setInterval(() => {
//            this.x -= 3;
//            //neue Position nachdem Wolken verschwinden
//            if (this.x <= -717) {
//                this.x = 720;
//            }
//        }, 1000 / 60);
//    }
}