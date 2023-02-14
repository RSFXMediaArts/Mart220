class myZombie
{

    constructor(walkAnimation)
    {
        this.walkAnimation = walkAnimation;
        this.zombieArray = [];
    }

    draw(i)
    {
        image(this.zombieArray[i], 25, 100, 100, 170); 
    }

    animate()
    {
        for (var j = 0; j < this.walkAnimation.length; j++) {
            zombert = loadImage(this.walkAnimation[j]);
            this.zombieArray[j] = zombert;
        }
    }

    //movement()
    //{
    //    if (keyIsPressed) {
    //        if (key == 'a') {
    //            strawX -= 5;
    //        }
    //
    //        else if (key == 'd') {
    //            strawX += 5;
    //        }
    //        else if (key == 'w') {
    //            strawY -= 5;
    //        }
    //        else if (key == 's') {
    //            strawY += 5;
    //        }
    //    }
    //}


}

class myBurger
{
    constructor()
    {
        this.ABurgerX = ABurgerX;
        this.AburgerY = AburgerY;
        
    }
draw()
{
    image(this.ABurger, 150, 150, 100,100);
}
}