class animationImage
{
    constructor(fileNames, x, y, w, h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fileNames = fileNames;
        this.imageObjects = [];
        this.loadAnimation();
        this.i = 0;
        this.currentFrameCount = 0;
        this.direction  = "";
        
    }
    getX()
    {
        return this.x;
    }

    setX(x)
    {
        this.x = x;
    }

    setCurrentFrameCount(currentFrameCount)
    {
        this.currentFrameCount = currentFrameCount;
    }

    loadAnimation()
    {
        for(var i = 0; i < this.fileNames.length; i++)
        {
            this.imageObjects[i] = loadImage(this.fileNames[i]);
        }
        //for (var l = 0; l < this.zombieArray.length; l++) {
        //    zombertChill = loadImage(this.idleAnimation[l]);
        //    this.zombieArray[l] = zombertChill;
        } 
         
    

    drawAnimation()
    {
        this.incrementIndex();
        if(this.direction == "reverse")
        {
            translate(this.w,0);
            scale(-1.0,1.0);
            image(this.imageObjects[this.i], -this.x, this.y, this.w, this.h);
        }
        else
        {
            image(this.imageObjects[this.i], this.x, this.y, this.w, this.h);
        }
    }
    //animate()
    //{
    //    for (var l = 0; l < this.idleAnimation.length; l++) {
    //        zombertChill = loadImage(this.idleAnimation[l]);
    //        this.zombieArray[l] = zombertChill;
    //    } 
    //}
    incrementIndex()
{
    if(this.currentFrameCount % 5 == 0)
        this.i += 1;

    if (this.i >= this.fileNames.length) {
        this.i = 0;
    }
}
updatePosition(direction)
    {
        this.direction = direction;
        if(direction == "forward")
        {
            this.x += 1;
        }
        else if(direction == "reverse")
        {   
            this.x -= 1;
            
        }
    }

isBurgerColliding(ellipse)
    {
        return collidePointPoint(this.x, this.y, 
            this.w, this.h,ellipse.getX(), ellipse.getY(),
            ellipse.getW(), ellipse.getH());
        /*var topEdge1 = this.y + this.h;
        var rightEdge1 = this.x + this.w; 
        var leftEdge1 = this.x;
        var bottomEdge1 = this.y;
        var topEdge2 = ellipse2.getY() + ellipse2.getH();
        var rightEdge2 = ellipse2.getX() + ellipse2.getW(); 
        var leftEdge2 = ellipse2.getX();
        var bottomEdge2 = ellipse2.getY();   
        
        if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
            return true; 
       }
       return false;
}*/
}
}

class MyBurgerPatty
{
    constructor(x,y,w,h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        
    }

    getX()
    {
      return this.x;
    }
    getY()
    {
      return this.y;
    }
    getW()
    {
      return this.w;
    }
    getH()
    {
      return this.h;
    }

drawEllipse()
{
    fill(153, 76, 0);
    ellipse(this.x, 150, 25, 25);
}
}
