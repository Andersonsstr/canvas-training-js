window.addEventListener('load', () => {
    draw(null);
});

var posx = 220;
var posy = 220;
var velocidade = 6;

function draw(direcao){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(posx, posy, 75, 75);
    console.log(posx)
    ctx.font = "30px Arial";
    ctx.fillText("Não vai embora não!!!", 10, 50);

    if(direcao == "cima"){
        posy-=velocidade;
    }   
    if(direcao == "baixo"){
        posy+=velocidade;
    }
    if(direcao == "esquerda"){
        posx-=velocidade;
    }
    if(direcao == "direita"){
        posx+=velocidade;
    }

    requestAnimationFrame(draw);
}

window.addEventListener("keydown", (event) => {
    let k = event.keyCode;
    setTimeout(() => {
        if (k == 37 || k == 65) {
            // left arrow or a
            draw("esquerda");
        } else if (k == 38 || k == 87) {
            // up arrow or w
            draw("cima");
        } else if (k == 39 || k == 68) {
            // right arrow or d
            draw("direita");
        } else if (k == 40 || k == 83) {
            // bottom arrow or s
            draw("baixo");
        }
    }, 1);
});
