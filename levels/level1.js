const level1 = new Level(
    [
        new Chicken(0.5 + Math.random() * 2),
        new Chicken(0.5 + Math.random() * 2),
        new Chicken(0.5 + Math.random() * 2),
        new Chicken(0.5 + Math.random() * 2),
        new Chicken(0.5 + Math.random() * 2),
        new Chicken(0.5 + Math.random() * 2),
        new Chicken(0.5 + Math.random() * 2),
        new Chicken(0.5 + Math.random() * 2),
        new Chicken(0.5 + Math.random() * 2),
        new Chicken(0.5 + Math.random() * 2),
        new Endboss(),
    ],
    [
        new Cloud(0, 0, 'img/5_background/layers/4_clouds/1.png'),
        new Cloud(720, 0, 'img/5_background/layers/4_clouds/2.png'),
        new Cloud(1440, 0, 'img/5_background/layers/4_clouds/2.png'),
        new Cloud(2160, 0, 'img/5_background/layers/4_clouds/2.png'),
    ],
    [
        new FirstBackgroundObject(-719, 0, 'img/5_background/layers/air.png'),
        new FirstBackgroundObject(-719, 0, 'img/5_background/layers/3_third_layer/2.png'),
        new FirstBackgroundObject(-719, 0, 'img/5_background/layers/3_third_layer/2.png'),
        new FirstBackgroundObject(-719, 0, 'img/5_background/layers/2_second_layer/2.png'),
        new FirstBackgroundObject(-719, 0, 'img/5_background/layers/1_first_layer/2.png'),
        new FirstBackgroundObject(0, 0, 'img/5_background/layers/air.png'),
        new FirstBackgroundObject(719, 0, 'img/5_background/layers/air.png'),
        new FirstBackgroundObject(0, 0, 'img/5_background/layers/3_third_layer/1.png'),
        new FirstBackgroundObject(719, 0, 'img/5_background/layers/3_third_layer/2.png'),
        new FirstBackgroundObject(0, 0, 'img/5_background/layers/3_third_layer/1.png'),
        new FirstBackgroundObject(719, 0, 'img/5_background/layers/3_third_layer/2.png'),
        new FirstBackgroundObject(0, 0, 'img/5_background/layers/2_second_layer/1.png'),
        new FirstBackgroundObject(719, 0, 'img/5_background/layers/2_second_layer/2.png'),
        new FirstBackgroundObject(0, 0, 'img/5_background/layers/1_first_layer/1.png'),
        new FirstBackgroundObject(719, 0, 'img/5_background/layers/1_first_layer/2.png'),
        new FirstBackgroundObject(1438, 0, 'img/5_background/layers/air.png'),
        new FirstBackgroundObject(2157, 0, 'img/5_background/layers/air.png'),
        new FirstBackgroundObject(1438, 0, 'img/5_background/layers/3_third_layer/1.png'),
        new FirstBackgroundObject(2157, 0, 'img/5_background/layers/3_third_layer/2.png'),
        new FirstBackgroundObject(1438, 0, 'img/5_background/layers/3_third_layer/1.png'),
        new FirstBackgroundObject(2157, 0, 'img/5_background/layers/3_third_layer/2.png'),
        new FirstBackgroundObject(1438, 0, 'img/5_background/layers/2_second_layer/1.png'),
        new FirstBackgroundObject(2157, 0, 'img/5_background/layers/2_second_layer/2.png'),
        new FirstBackgroundObject(1438, 0, 'img/5_background/layers/1_first_layer/1.png'),
        new FirstBackgroundObject(2157, 0, 'img/5_background/layers/1_first_layer/2.png'),
        
    ]
);