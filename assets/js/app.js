let myGamePiece;
let myObstacles = [];
let myScore;



function startGame(){

}

let myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
    }
}