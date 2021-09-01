// Custom code
let canvas = document.getElementById("canvas"); // Get canvas element
let ctx = canvas.getContext("2d");
canvas.width = 600; // Game canvas width
canvas.height = 500; // Game canvas height

// Declare variables 
let spacePressed = false;
let touchScreen = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;
// end.....

// Credit: Code sourced from w3school.com and edited
// by developer to fit the projects needs.

function animate() { // Declare function
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Target properties
    handleObstacles(); // Function call handleObstacles()
    bird.update(); // Function call bird.update()
    bird.draw(); // Function call bird.draw()
    ctx.fillStyle = "white"; // Text colour white
    ctx.font = "90px  Georgia"; // Font family and size
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
    handleCollisions(); // Call handleCollisions()
    if (handleCollisions()) {
        return;
    }
    handleParticles();
    requestAnimationFrame(animate);
    angle += 0.12;
    hue++;
    frame++;
}
animate();


//Custom code by developer
window.addEventListener("keydown", function(e){ // Listen for keydown
    if (e.code === "Space") {
        spacePressed = true;
    }
});
window.addEventListener("keyup", function(e){ // Listen for keyup
    if (e.code === "Space") {
        spacePressed = false;
    }
});
canvas.addEventListener("touchstart", function(e) { // Listen for touchstart custom code
    if (e.touches >= "Touches") {
        touchScreen = true;
    }
});
canvas.addEventListener("touchend", function(e) { // Listen for touchend custom code
    if (e.touches >= "Touches") {
        touchScreen = false;
    }
});
// end......

const bang = new Image();
bang.src = "./assets/images/explosion.png";

/* Credit: Code sourced from "Franks laboratory youtube tutorial" and edited to
 * fit the projects needs
 */
function handleCollisions() { // Declair function
    for (let i = 0; i < obstaclesArray.length; i++) { // for loop
        if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width && // if statement
            bird.x + bird.width > obstaclesArray[i].x &&
            ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) ||
                (bird.y > canvas.height - obstaclesArray[i].bottom &&
                    bird.y + bird.height < canvas.height))) {
            // collision detected
            ctx.drawImage(bang, bird.x, bird.y, 50, 50);
            ctx.font = "35px arial";
            ctx.fillStyle = "red";
            ctx.fillText("Game Over, your score is " + score, 90,
            canvas.height / 2.2);
            setTimeout(function () { // custom code will auto reload the game. 
                window.location.reload(1);
            }, 5000);
            return true;
        }
    }
}
