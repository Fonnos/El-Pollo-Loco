class Chicken extends MoveableObject {
    height = 100;
    width = this.height;
    y = 440 - this.height;  //flexibele y durch unterschiedliche höhe der chicken
    


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')

        this.x = 200 + Math.random() * 500; // Zahl zwischen 200 und 700
    }



moveLeft() {


}

}