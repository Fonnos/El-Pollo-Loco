class Chicken extends MoveableObject {
    height = 100;
    width = this.height;
    y = 440 - this.height;  //flexibele y durch unterschiedliche höhe der chicken
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    speedIndex;
    


    constructor(speedIndex) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 1000 + Math.random() * 2000; // Zahl zwischen 200 und 700;
        this.animate();
        this.moveLeft(speedIndex);

        
    }


    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length; //ermitteln des restes 
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 120);  
    }



moveLeft(speedIndex) {
    setInterval(() => {
        this.x -= speedIndex;
        //neue Position nachdem Wolken verschwinden
    }, 1000 / 60);
}

}

