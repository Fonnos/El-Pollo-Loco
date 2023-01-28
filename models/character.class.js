class Character extends MoveableObject {
    height = 200;
    width = this.height / 2;
    y = 430 - this.height;
    

    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png')
    }


    jump() {


    }
}