class Tools
{
    constructor(x, y)
    {
        this.width = 50;
        this.height = 0;
        this.x = x ? x: 0;
        this.y = y ? y: 0;
        this.color = "#aaa";
        this.tools = [];
    }

    add(tool)
    {
        if(this.isTool(tool))
        {
            this.tools.push(tool);
            this.height += tool.height;
            this.y -= tool.height/2;
            return true;
        }
        else
        {
            return false;
        }
    }

    isTool(something)
    {
        return something instanceof Tool;
    }

    draw(ctx)
    {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.beginPath();
        ctx.moveTo(this.width,0);
        ctx.lineTo(this.width,2000);
        ctx.stroke();
        this.tools.forEach((tool,i) => {
            tool.x = this.x;
            tool.y = this.y+(tool.height*i);
            tool.draw(ctx);
            if(i < this.tools.length-1)
            {
                ctx.strokeStyle = "#000";
                ctx.strokeRect(this.x, this.y+(tool.height*(i+1)), this.width, 0.1);
            }
        });
    }
}

class Tool
{
    constructor(imgsrc)
    {
        this.width = 50;
        this.height = 50;
        this.x = 0;
        this.y = 0;
        let imgElem = document.createElement("img");
        imgElem.src = imgsrc;
        this.img = imgElem;
    }

    draw(ctx)
    {
        ctx.drawImage(this.img, this.x + 10, this.y+ 10, this.width - 20, this.height - 20);
    }
}