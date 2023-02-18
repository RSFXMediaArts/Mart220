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

class myBurgerPatty
{
    constructor(x,y,w,h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        
    }
drawEllipse()
{
    fill(153, 76, 0);
    ellipse(this.x, this.y, this.w, this.h);
}
}