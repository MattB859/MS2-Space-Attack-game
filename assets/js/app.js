const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let click = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;

// Custom code by developer 
 animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bird.update();
    bird.draw();
    handleParticles();
    requestAnimationFrame(animate);
    angle+=0.12;
    hue++;
}
animate();

// Custom code by developer
window.addEventListener('keydown', (e) => {
 if (e.code === 'Space') spacePressed = true;

});
window.addEventListener('keyup', (e) =>  {
    if (e.code === 'Space') spacePressed = false;
   });
   
   
