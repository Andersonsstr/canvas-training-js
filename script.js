function desenha(){
    let canvas = document.getElementById('desenho');
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = "#00f";
    ctx.fillRect(0,0,100,100);

    ctx.fillStyle = "rgb(255, 0, 0, 0.5)";
    ctx.fillRect(50,50,100,100);

    ctx.fillStyle = "rgb(255, 0, 0, 0.5)";
    ctx.rect(200, 200,100,100);   
    ctx.rect(300, 300,100,100);
    ctx.fill();

    ctx.clearRect(200, 200,50,50);

    ctx.moveTo(0,0);
    ctx.lineTo(250,250);
    ctx.lineTo(500, 0);
    ctx.moveTo(250,250);
    ctx.lineTo(0,500);
    ctx.stroke();
}


//fillStyle vai definir o estilo do novo elemento a ser redenrizado
//fillRect define a posição e o tamanho do elemento e printa na tela
//clearRect apaga uma area do desenho
