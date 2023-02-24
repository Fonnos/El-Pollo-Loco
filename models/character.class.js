class Character extends MoveableObject {
    x = 250;
    height = 200;
    speed = 5;
    width = this.height / 2;
    y = 200 - this.height;
    

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ]

    world;
    walking_sound = new Audio('audio/walking.mp3');
    

    constructor() {
        
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_WALKING);
        this.applyGrafity();
        this.animate();
        
        
        
    }    
           
        
 

    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
            }
            if (this.world.keyboard.UP && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x + 200;
        }, 1000 / 60);
        this.pickImages();        
    }

    
    pickImages() {
        setInterval(() => {
            if(this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING)
            }

            if (this.world.keyboard.RIGHT && !this.isAboveGround()) {
                //walkanimation
                this.playAnimation(this.IMAGES_WALKING)
            }

            if (this.world.keyboard.LEFT && !this.isAboveGround()) {
                //walkanimation
                this.playAnimation(this.IMAGES_WALKING)
            }             
            
        }, 50); 
    }

            
       

         
    
    


    
}
