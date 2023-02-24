class MoveableObject { 
    img;
    ;
    width = 100;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;

   applyGrafity() {
    setInterval(() => {
        if (this.isAboveGround() || this.speedY > 0 ) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
    }, 50);
       
       
   }


   isAboveGround() {
    return this.y < 210;
   }

   isOnGround() {
    return this.y == 227.5;
   }

   moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
    this.walking_sound.play();
   }

   moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
    this.walking_sound.play();
   }


    


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages (arr) {

        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
        
    }



    playAnimation(images) {
        let i = this.currentImage % images.length; //ermitteln des restes 
                    let path = images[i];
                    this.img = this.imageCache[path];
                    this.currentImage++;
    }

    jump() {
        this.speedY = 20;
        console.log(this.speedY);
    }
}


    