var canvas;
var ctx;
var tools = new Tools();

window.addEventListener("DOMContentLoaded", function(e){
    canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
});

window.addEventListener("resize", function(e){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function update()
{
    ctx.fillStyle = "#eef";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    tools.draw(ctx, 0, (canvas.height/2)-tools.height/2);

    requestAnimationFrame(update);
}

requestAnimationFrame(update);