class myShapes
{
    constructor(shapetype, param1, param2, param3, translateX, translateY, rotateX, rotateY, rotateZ, textureValue)
    {
        this.shapetype = shapetype;
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
        this.translateX = translateX;
        this.translateY = translateY;
        this.rotateX = rotateX;
        this.rotateY = rotateY;
        this.rotateZ = rotateZ;
        this.textureValue = textureValue;
    }

    draw(fCount)
    {
        push();
        translate(this.translateX, this.translateY);
        rotateX(this.rotateX * fCount);
        rotateY(this.rotateY * fCount);
        rotateZ(this.rotateZ);
        texture(this.textureValue);
        if(this.shapetype == "box")
        {
            box(this.param1, this.param2, this.param3);
        }
        else if (this.shapetype == "cylinder")
        {
            cylinder(this.param1, this.param2);
        }
        pop();
    }
}