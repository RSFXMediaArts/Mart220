
let skull;
let bg;
let smoke;
let gif_loadImg;
let gif_createImg;
let smoke_loadImg;
let smoke_createImg;
let shapeArray = [];
var boxTranslationX = 225;
var boxTranslationY = -145;

function preload()
{
    gif_loadImg = loadImage('images/flames.gif');
    gif_createImg = createImg('images/flames.gif');
    smoke_loadImg = loadImage('images/smoke-lab.gif');
    smoke_createImg = createImg('images/smoke-lab.gif');
    fire = loadImage('images/fire.jpg');
    skull = loadImage('images/Skull01.png');
    smoke = loadImage('images/smoke.jpg');
    newfont = loadFont('fonts/Crows.ttf');
    bg = loadImage('images/Background.jpg');
}

function setup()
{
    createCanvas(800,600,WEBGL);
}

function draw()
{
    //background(0,0,0);
    textFont(newfont);
    textSize(32);
    fill(255);
    image(bg, -400,-300);
    image(gif_loadImg, -400, 190);
      gif_createImg.position (0, -600);
      image(gif_loadImg, 290, 190);
      gif_createImg.position (0, -600);
      image(gif_loadImg, -65, 190);
      gif_createImg.position (0, -600);
      image(smoke_loadImg, -400, 100);
      smoke_createImg.position (0, -600);
      image(smoke_loadImg, -50, 100);
      smoke_createImg.position (0, -600);
      image(smoke_loadImg, -250, -300);
      smoke_createImg.position (0, -600);
    image(skull, -150, -225);
    text("Born In Fire!", -80, -270);
    text("by Richard Sibley", -90, -240);
    normalMaterial();

    for (var i = 0; i < shapeArray.length; i++) {
        shapeArray[i].draw(frameCount);
      }

    //Eye (Left)
    push();
    translate(-60, -1);
    rotateX(frameCount * 0.05);
    rotateY(frameCount * 0.01);
    texture(fire);
    sphere(30);
    pop();

    //Eye (Right)
    push();
    translate(60, -1);
    rotateX(frameCount * 0.05);
    rotateY(frameCount * 0.01);
    texture(fire);
    sphere(30);
    pop();
    
    push();
    translate(300, -200);
    rotateX(frameCount * 0.50);
    rotateY(frameCount * 0.01);
    texture(smoke);
    sphere(60);
    pop();

    push();
    translate(-300, -200);
    rotateX(frameCount * 0.20);
    rotateY(frameCount * 0.01);
    texture(smoke);
    sphere(60);
    pop();

}