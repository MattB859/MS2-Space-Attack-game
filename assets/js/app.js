let myGamePiece;
let myObstacles;
let MyScore;

function myGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGamePiece.gravity = 0.05;
    MyScore = new component("30px", "consolas", "black", 280, 40, "text");
    myGameArea.start();
}




let background = new Image();
background.src = 'sea_background.png';
let bg = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}