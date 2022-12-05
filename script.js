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
let dx = 1;
let dy = 1;
let px = 0;
let py = 0;
let largRet=50;
let altRetangulo=50;
let l_canvas = 500;
let a_canvas = 500;
let anima;
let velocidade = 5;

function animacao(){
    let canvas = document.getElementById('desenho');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,l_canvas,a_canvas);

    ctx.fillStyle = "#f00";    
    ctx.fillRect(px,py,largRet,altRetangulo);
    
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";
    ctx.strokeRect(px,py,largRet,altRetangulo);
  
    if(px<445 && py == 0) 
        px+=dx*velocidade; 
    if(px>=445 && py<445)
        py+=dy*velocidade; 
    if(py>=445 && px>= 5)
        px += -dx*velocidade;
    if(px==0 && py>=5)
        py += -dy*velocidade;

    anima = requestAnimationFrame(animacao);
}