class burgers{
    constructor(){
        this.xPos = random(width);
        this.yPos = random(height);
        this.diameter = random(10,50);
        this.col = (139,69,19); 
}

show()
{
    fill(this.col, 0,0);
    circle(this.xPos, this.yPos, this.diameter)
}
}