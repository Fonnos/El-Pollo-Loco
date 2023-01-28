class BackgroundObject extends MoveableObject {

    height = 480;
    width = 720;
    x = 0;
    y = 0;    


    constructor(imagePath, x ,y, width, height) {
        super().loadImage(imagePath, x, y, width, height);
       }
}