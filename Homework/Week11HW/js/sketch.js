let earth;
let air;
let fire;
let water;
let metal;
let Elements;
let skulltexture;
let shapeArray = [];
var boxTranslationX = 225;
var boxTranslationY = -145;

function preload()
{
    earth = loadImage('images/earth.jpg');
    air = loadImage('images/air.jpg');
    fire = loadImage('images/fire.jpg');
    water = loadImage('images/water.png');
    metal = loadImage('images/metal.jpg');
    newfont = loadFont('fonts/Crows.ttf');
    skulltexture = loadImage('images/BoneTexture.jpg');
    Elements = loadModel('3Dmodels/Elements.stl');
}

function setup()
{
    createCanvas(800,600,WEBGL);
    shapeArray.push(new myShapes("cylinder",50, 150, 24, 275, 150, 0.1,0.02, 0, water));
    shapeArray.push(new myShapes("box", 150, 150, 150, boxTranslationX, boxTranslationY, 0.04, 0.03, 0, fire));
}

function draw()
{
    background(105,105,105);
    textFont(newfont);
    textSize(32);
    fill(255);
    text("The Elements", -80, -270);
    text("by Richard Sibley", -90, -240);
    normalMaterial();

    for (var i = 0; i < shapeArray.length; i++) {
        shapeArray[i].draw(frameCount);
      }

    //Elements Text
    push();
    scale(0.5);
    rotateX(frameCount * 0.03);
    //rotateY(frameCount * 0.03);
    model(Elements);
    pop();

    //Earth Nation
    push();
    translate(-250, -150);
    rotateX(frameCount * 0.05);
    rotateY(frameCount * 0.01);
    texture(earth);
    sphere(100);
    pop();

    //Fire Nation
    /*push();
    translate(275, -150);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.03);
    texture(fire);
    torus(70, 15);
    pop();*/

    //Air Nation
    push();
    translate(-250, 150);
    //rotateZ(frameCount * 0.1);
    rotateX(frameCount * 0.5);
    rotateY(frameCount * 0.01);
    texture(air);
    ellipsoid(50, 100,75, 24, 24);
    pop();

    if (mouseIsPressed) {
        boxTranslationX = 0;
        boxTranslationY = 0;
        boxTranslationX = floor(random(800));
        boxTranslationY = floor(random(600));
      }

    //Water Nation
    /*push();
    translate(275,150);
    rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.02);
    texture(water);
    cylinder(50, 150, 24, 24, false, false);
    pop();

    //Metal
    /*push();
    translate(0,0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(metal);
    box(120, 120, 120);
    pop();*/

}