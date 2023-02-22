class MoveableObject { 
    img;
    ;
    width = 100;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;

   applyGrafity() {
       
           setInterval(() => {
            if (this.y < 230 ) {
               this.y -= this.speedY;
               this.speedY -= this.acceleration;
            }
           }, 1000 / 25);
       
       
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


    moveRight() {
        console.log('Moving right')
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; //ermitteln des restes 
                    let path = images[i];
                    this.img = this.imageCache[path];
                    this.currentImage++;
    }
}

    