class Character extends MoveableObject {
    height = 200;
    speed = 5;
    width = this.height / 2;
    y = 430 - this.height;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    world;
    
    

    constructor() {
        
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
        
        
    }    
           
        
 

    animate() {

            setInterval(() => {
                if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
            }
            }, 1000 / 60)

            setInterval(() => {
                if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
            }
            }, 1000 / 60)


            setInterval(() => {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    

                    //walkanimation
                    let i = this.currentImage % this.IMAGES_WALKING.length; //ermitteln des restes 
                    let path = this.IMAGES_WALKING[i];
                    this.img = this.imageCache[path];
                    this.currentImage++;
                }
                
            }, 50); 
        }

            
       

         
    
    


    jump() {


    }
}
