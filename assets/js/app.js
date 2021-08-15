
let myGamePiece;
let myObstacles = [];
let myScore;


function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGamePiece.gravity = 0.05;
    myScore = new component("30px", "consolas", "black", 280, 40, "text");
    myGameArea.start();
}

let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.imterval = setInterval(updateGameArea, 20);
    },
    clear : function(){
        this.context.clearReact(0, 0, this.canvas.width, this.canvas.height)
    }
}

function component(width, height, color, x, y, type){
    
}