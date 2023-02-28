var strawX = 297;
var strawY = 103;
var burgerLettersX = 75;
var burgerLettersY = 125;
var mouseSesameSeedX = 160;
var mouseSesameSeedY = 180;
var bob;
var fries;
var cow;
var cowX;
var cowY;
var cowXSpeed = 2;
var cowYSpeed = 1.5;
var cowXDirection = 1;
var cowYDirection = 1;
var timerValue = 20;

var counter = 0;

var zombert;
var zombieArray = [];
var walkAnimation = [];
var idleAnimation = [];
var i = 0;
var MyZombieObject;

//var mySesameSeed;
var z = 0;

function preload() {
    bob = loadImage('Images/Bob.png');
    fries = loadImage('Images/fries.png');
    cow = loadImage('Images/ChickFilACow.png');
    walkAnimation = loadStrings('Images/WalkAnim/walkinganimation.txt');
    idleAnimation = loadStrings('Images/IdleAnim/idleanimation.txt');
    myFont1 = loadFont('Fonts/BurgerHut.ttf');
    myFont2 = loadFont('Fonts/GodGivenName.ttf');
    myFont3 = loadFont('Fonts/Simpleness.otf');
    setInterval(timeIt, 50);
}

function setup() {
    createCanvas(400, 400);
    MyZombieObject = new myZombie(walkAnimation);
    MyZombieObject.animate();
    myBurgerPatty = new myBurgerPatty(random(10, width), random(20, height), random(5, 150));
    setInterval(incrementIndex, 50);
    frameRate(30);
    cowX = width / 3;
    cowY = height / 3;
}
function draw() {
    background(95, 158, 160);
    cowX = cowX + cowXSpeed * cowXDirection;
    cowY = cowY + cowYSpeed * cowYDirection;
    image(cow, cowX, cowY);
    if (cowX > 300 || cowX < 0) {
        cowXDirection *= -1;
    }
    if (cowY > 400 - 62 || cowY < 0) {
        cowYDirection *= -1;
    }
    if (timerValue >= 10) {
        text("0:" + timerValue, 25, 375);
    }
    if (timerValue < 10) {
        text('0:0' + timerValue, 25, 375);
    }
    if (timerValue == 0) {
        text('EAT MORE CHIKIN!!', 75, 375);
    }
    strokeWeight(1);

    //Top Bun
    stroke(0);
    fill(218, 165, 32);
    arc(200, 195, 120, 120, PI, TWO_PI);
    //Pickles
    stroke(0);
    fill(0, 128, 0)
    rect(140, 195, 55, 10);
    fill(0, 128, 0)
    rect(200, 195, 50, 10);
    //Cheese
    fill(255, 140, 0)
    rect(135, 205, 130, 5);
    //Lettuce
    fill(50, 205, 50);
    stroke(0);
    beginShape();
    curveVertex(140, 195);
    curveVertex(140, 195);
    curveVertex(120, 210);
    curveVertex(215, 195);
    curveVertex(230, 210);
    curveVertex(260, 195);
    curveVertex(260, 195);
    endShape();
    //Patty *double* :)
    fill(111, 78, 55);
    rect(135, 210, 120, 15);
    rect(140, 225, 120, 15);
    //Ketchup & Mustard
    fill(255, 0, 0);
    rect(140, 240, 60, 5);
    fill(255, 255, 0);
    rect(200, 240, 60, 5);
    //Bottom Bun
    fill(218, 165, 32);
    rect(140, 245, 120, 20)

    //Cup
    fill(178, 34, 34)
    quad(290, 265, 275, 150, 330, 150, 320, 265);
    stroke(192, 192, 192);
    //~Cup Lid~
    fill(192, 192, 192);
    quad(270, 152, 275, 142, 330, 142, 335, 152);
    //~Cup Lines~
    strokeWeight(4);
    line(293, 262, 322, 205);
    line(286, 223, 320, 152);
    //~Straw~
    strokeWeight(0);
    fill(255, 255, 255);
    rect(strawX, strawY, 10, 40);
    if (keyIsPressed) {
        if (key == 'a') {
            strawX -= 5;
        }

        else if (key == 'd') {
            strawX += 5;
        }
        else if (key == 'w') {
            strawY -= 5;
        }
        else if (key == 's') {
            strawY += 5;
        }
    }


    //~Details~
    strokeWeight(1)
    //Sesame Seeds
    stroke(0);

    fill(255, 235, 205);
    ellipse(mouseSesameSeedX, mouseSesameSeedY, 10, 5);
    ellipse(175, 167, 10, 5);
    ellipse(185, 145, 10, 5);
    ellipse(198, 153, 10, 5);
    ellipse(210, 173, 10, 5);
    ellipse(250, 185, 10, 5);
    ellipse(240, 160, 10, 5);
    //Pickle Wrinkles
    stroke(143, 188, 143)
    line(185, 200, 185, 204);
    line(205, 196, 205, 204);
    line(213, 196, 213, 204);
    line(220, 196, 220, 204);
    stroke(0, 100, 0)
    line(186, 200, 186, 204);
    line(206, 196, 206, 204);
    line(214, 196, 214, 204);
    line(221, 196, 221, 204);
    //Patty Grill Marks
    //~Top Patty~
    strokeWeight(3);
    stroke(60, 20, 20);
    line(145, 211, 145, 223);
    line(170, 211, 170, 223);
    line(195, 211, 195, 223);
    line(220, 211, 220, 223);
    line(245, 211, 245, 223);
    //~Bottom Patty~
    line(150, 226, 150, 238);
    line(175, 226, 175, 238);
    line(200, 226, 200, 238);
    line(225, 226, 225, 238);
    line(250, 226, 250, 238);


    //Food Title
    textSize(32);
    fill(128, 0, 0);
    if (burgerLettersX < 400) {
        burgerLettersX += random(500);
    }
    else {
        burgerLettersX -= random(500);
    }
    text('B', burgerLettersX, 125);
    text('U', burgerLettersX, 155);
    text('R', burgerLettersX, 185);
    text('G', burgerLettersX, 215);
    text('E', burgerLettersX, 245);
    text('R', burgerLettersX, 275);
    text('S', burgerLettersX, 305);

    //Name
    textSize(20);
    fill(148, 0, 211);
    textFont(myFont2);
    text('Richie Sibley', 275, 385);

    //Drawing Title
    textSize(24);
    fill(255, 255, 0);
    textFont(myFont1);
    text('My Favorite Food', 10, 25);

    //Movement instruction text
    textSize(16);
    fill(199, 21, 133);
    textFont(myFont3);
    text('Use "w" "a" "s" "d" to move the straw!', 35, 60);

    //Mouse click Instruction text
    fill(255, 255, 255);
    text('Click the mouse to move a Sesame Seed!', 15, 355);
    image(bob, 320, 220);
    image(fries, 0, 240);
    MyZombieObject.draw(i)
    myBurgerPatty.drawEllipse();
    
}
//Mouse Clicked Sesame Seed Placement
function mouseClicked() {
    mouseSesameSeedX = mouseX;
    mouseSesameSeedY = mouseY;
}

function drawCounter() {
    textSize(50);
    text(counter, 450, 350);
}

function displayCounter() {
    counter++;
    i++;
    if (i > 9) {
        i = 0;
    }
}


function timeIt() {
    if (timerValue > 0) {
        timerValue--;
    }
}
function incrementIndex()
{
    i += 1;
    if (i >= walkAnimation.length) {
        i = 0;
    }
}