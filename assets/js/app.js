// Custom code by developer 
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 500;

let spacePressed = false;
let touchScreen = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;
let gameMusic; 

  


// Custom code by developer 
animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleObstacles();
    bird.update();
    bird.draw();
    ctx.fillStyle = 'red';
    ctx.font = '90px  Georgia';
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
    handleCollisions();
    if (handleCollisions()) return;
    handleParticles();
    requestAnimationFrame(animate);
    angle += 0.12;
    hue++;
    frame++;
   
}
animate();


/*
Event listener section
Custom code by developer.*/ 
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') spacePressed = true;

});
window.addEventListener('keyup', (e) => {
    if (e.code === 'Space') spacePressed = false;
});

//custom code by developer
canvas.addEventListener('touchstart', (e) => {
    if (e.touches >= 'Touches') touchScreen = true;
     
});

canvas.addEventListener('touchend', (e) => {
    if (e.touches >= 'Touches') touchScreen = false;
    
});

// custom code by developer for sound fx
class sound {
    constructor(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        document.body.appendChild(this.sound);
        this.play = () => {
            this.sound.play();
        };
        this.stop = () => {
            this.sound.pause();
        };
    }
}

const bang = new Image();
bang.src = '/assets/images/explosion.png';
let fxSound = new sound('sound/explosion.mp3');

function handleCollisions() {
    for (let i = 0; i < obstaclesArray.length; i++) {
        if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width &&
            bird.x + bird.width > obstaclesArray[i].x &&
            ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) ||
                (bird.y > canvas.height - obstaclesArray[i].bottom &&
                    bird.y + bird.height < canvas.height))) {
            // collision detected
            ctx.drawImage(bang, bird.x, bird.y, 50, 50); 
            ctx.font = "25px Georgia";
            ctx.fillStyle = 'black';
            ctx.fillText('Game Over, your score is ' + score, 160, canvas.height/2);
             //reload window after game is over.
            // window.location.reload();
            //fxSound.play(); 
            return true;
        }
    }
   
}
