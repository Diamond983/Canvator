var canvas;
var ctx;
var tools;

window.addEventListener("DOMContentLoaded", function(e){
    canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    tools = new Tools(0, canvas.height/2);

    tools.add(new Tool("imgs/box.png"));
    tools.add(new Tool("imgs/circle.png"));
    tools.add(new Tool("imgs/line.png"));
});

window.addEventListener("resize", function(e){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function update()
{
    ctx.fillStyle = "#eef";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    tools.draw(ctx);

    requestAnimationFrame(update);
}

requestAnimationFrame(update);