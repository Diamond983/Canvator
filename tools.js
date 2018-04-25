class Tools
{
    constructor()
    {
        this.width = 100;
        this.height = 400;
        this.color = "#aaa";
        
    }

    draw(ctx, x, y)
    {
        ctx.fillStyle = this.color;
        ctx.fillRect(x, y, this.width, this.height);
    }
}

class Tool
{
    constructor(img)
    {
        this.width = 100;
        this.height = 100;
        this.img = img;
    }

    draw(ctx)
    {

    }
}