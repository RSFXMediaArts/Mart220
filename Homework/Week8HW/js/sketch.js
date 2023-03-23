var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
var burgerImage;
var badBurger;
var myFrenchFry;
var score = 0;
var Health = 3;
var mySpaceBG;
var canvasHeight = 800;
var canvasWidth = 900;

function preload() {
    idlePaths = loadAnimation('Images/IdleAnim/Idle_000.png', 'Images/IdleAnim/Idle_014.png');
    walkPaths = loadAnimation('Images/WalkAnim/Walk_000.png', 'Images/WalkAnim/Walk_009.png');
    mySpaceBG = loadImage('Images/Starfield.jpg');
}

function setup() {
    createCanvas(800, 900);
    myAnimation = new animationImage(50, 125, 75, 75);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);
    //Burger
    burgerImage = createSprite(random(20, canvasWidth), random(20, canvasHeight), 'static');
    burgerImage.scale = .1;
    burgerImage.addImage(loadImage('Images/burger.png'));
    //Bad Burger
    badBurger = createSprite(random(20, canvasWidth), random(20, canvasHeight), 'static');
    badBurger.scale = .2;
    badBurger.addImage(loadImage('Images/meanBurger.png'));
    //Sesame Seed
    myFrenchFry = createSprite(random(20, canvasWidth), random(20, canvasHeight), 50, 50, 'static');
    myFrenchFry.scale = .1;
    myFrenchFry.addImage(loadImage('Images/FrenchFry.png'));

}

function draw() {

    background(mySpaceBG);
    textSize(24);
    fill(255);
    text("Score:" + score, 10, 20);
    text("Health:" + Health, 110, 20);

    //Losing
    if (Health <= 0) {
        textSize(80);
        fill(255);
        text("Sorry, you Lose! :(", 55, 400)
        textSize(30);
        text("Hit refresh to try again!", 240, 450)
        noLoop()
    }
    //Winning
    if (score >= 10) {
        textSize(80);
        fill(255);
        text("YOU WIN!!!", 175, 400)
        textSize(30);
        text("Hit refresh to play again!", 240, 450)
        noLoop()
    }
    //KeyboardEvents
    if (kb.pressing('d')) {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
        if (myAnimation.isColliding(burgerImage)) {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
        }
        if (myAnimation.isColliding(burgerImage)) {
            score += 1;
        }
        if (myAnimation.isColliding(badBurger)) {
            Health -= 1;
        }
        if (myAnimation.isColliding(myFrenchFry)) {
            Health += 1;
        }
    }
    else if (kb.pressing('a')) {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
        if (myAnimation.isColliding(burgerImage)) {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
        }
        if (myAnimation.isColliding(burgerImage)) {
            score += 1;
        }
        if (myAnimation.isColliding(badBurger)) {
            Health -= 1;
        }
        if (myAnimation.isColliding(myFrenchFry)) {
            Health += 1;
            myFrenchFry
        }
    }
    else if (kb.pressing('s')) {
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');
        if (myAnimation.isColliding(burgerImage)) {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');

        }
        if (myAnimation.isColliding(burgerImage)) {
            score += 1;
        }
        if (myAnimation.isColliding(badBurger)) {
            Health -= 1;
        }
        if (myAnimation.isColliding(myFrenchFry)) {
            Health += 1;
            myFrenchFry
        }
    }
    else if (kb.pressing('w')) {
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');
        if (myAnimation.isColliding(burgerImage)) {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');

        }
        if (myAnimation.isColliding(burgerImage)) {
            score += 1;
        }
        if (myAnimation.isColliding(badBurger)) {
            Health -= 1;
        }
        if (myAnimation.isColliding(myFrenchFry)) {
            Health += 1;
            myFrenchFry
        }
    }
    else {
        myAnimation.drawAnimation('idle');
    }
}