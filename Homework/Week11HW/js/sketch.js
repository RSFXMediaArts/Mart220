let earth;
let air;
let fire;
let water;
let metal;


let shapeArray = [];

var boxTranslationX = -100;
var boxTranslationY = -100;

function preload()
{
    earth = loadImage('images/earth.jpg');
    air = loadImage('images/air.jpg');
    fire = loadImage('images/fire.jpg');
    water = loadImage('images/water.png');
    metal = loadImage('images/metal.jpg');
    newfont = loadFont('fonts/Crows.ttf')
}

function setup()
{
    createCanvas(800,600,WEBGL);
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

    //Earth Nation
    push();
    translate(-250, -150);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(earth);
    sphere(100);
    pop();

    //Fire Nation
    push();
    translate(275, -150);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(fire);
    torus(70, 15);
    pop();

    //Air Nation
    push();
    translate(-250, 150);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(air);
    ellipsoid(50, 100,75, 24, 24);
    pop();

    //Water Nation
    push();
    translate(275,150);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(water);
    cylinder(50, 150, 24, 24, false, false);
    pop();

    //Metal
    push();
    translate(0,0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(metal);
    box(120, 120, 120);
    pop();

}