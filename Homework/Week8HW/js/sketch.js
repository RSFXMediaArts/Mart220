var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
var burgerImage;
var score = 0;

function preload() {
   idlePaths = loadAnimation('Images/IdleAnim/Idle_000.png', 'Images/IdleAnim/Idle_014.png');
   walkPaths = loadAnimation('Images/WalkAnim/Walk_000.png', 'Images/WalkAnim/Walk_009.png');
}

function setup() {
  createCanvas(1500,1000);
  myAnimation = new animationImage(50, 125, 75, 75);
  myAnimation.loadAnimation('idle', idlePaths);
  myAnimation.loadAnimation('walk', walkPaths);
  //Burger
  burgerImage = createSprite(random(10, windowWidth), random(10, windowHeight), 'static');
  burgerImage.scale = .2;
  burgerImage.addImage(loadImage('Images/burger.png'));
 

}

function draw() 
{

    background(120);
    textSize(24);
    text("Score:" + score, 10, 20);

    if(myAnimation.isColliding(burgerImage))
    {
        score++;
    }
    if(kb.pressing('d'))
    {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');    
        if(myAnimation.isColliding(burgerImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle'); 
        }     
    }
    else if(kb.pressing('a'))
    {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');  
        if(myAnimation.isColliding(burgerImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
        }      
    }
    else if(kb.pressing('s'))
    {
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');
        if(myAnimation.isColliding(burgerImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
        }        
    }
    else if(kb.pressing('w'))
    {
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');
        if(myAnimation.isColliding(burgerImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
        }        
    }
    else
    {
        myAnimation.drawAnimation('idle');
    } 
}