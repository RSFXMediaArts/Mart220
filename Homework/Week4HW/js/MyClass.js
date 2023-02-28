/*class myZombie
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

    animate(i)
    {
        for (var j = 0; j < this.walkAnimation.length; j++) {
            zombert = loadImage(this.walkAnimation[j]);
            this.zombieArray[j] = zombert;
        }
    }
}*/

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
        //this.idleAnimation = idleAnimation;
        //this.zombieArray = [];
        this.loadAnimation();
        this.i = 0;
        this.currentFrameCount = 0;
        //this.incrementIndex();
        this.direction  = "";
        //setInterval(this.incrementIndex, 100);
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