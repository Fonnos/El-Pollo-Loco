class BackgroundObject extends MoveableObject {

    height = 480;
    width = 720;
    x = 0;
    y = 0;    


    constructor(imagePath) {
        super().loadImage(imagePath);
       }
}