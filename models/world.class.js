class World {

    //Reihenfolge der Objectwerte = path, x, y, width, height

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];

    clouds = [
        new Cloud(0, 0, 'img/5_background/layers/4_clouds/1.png'),
        new Cloud(720, 0, 'img/5_background/layers/4_clouds/2.png'),
    ];

    backgroundObjects = [
        new BackgroundObject('img/5_background/layers/air.png'),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png'),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png'),
        new FirstBackgroundObject(0, 0, 'img/5_background/layers/1_first_layer/1.png'),
        new FirstBackgroundObject(717, 0, 'img/5_background/layers/1_first_layer/2.png'),
        
    ];

    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
}




    draw() {
        //Canvas wird gecleart
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //Reihenfolge wichtig, läd nacheinander die arrays der Objecte
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);

        //Draw() wird immer wieder aufgerufen.
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    //for jedes Object im array
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }


    
    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }

    
           
}