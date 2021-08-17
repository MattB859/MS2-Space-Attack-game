let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let buttonPressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;

let temp = canvas.height - 90;

// Custom code by developer
 animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(10, canvas.height - 90, 50, 50);
    bird.update();
    bird.draw();
    requestAnimationFrame(animate);
}
animate()

window.addEventListener('keydown', (e) => {
 if (e.code === 'Space') spacePressed = true;

});
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') spacePressed = false;
   });
   

window.addEventListener('mousedown', (e) => {
    if (e.code === 'Click') buttonPressed = true;

});

window.addEventListener('mouseup', (e) => {
       if (e.code === 'Click') buttonPressed = false;
});
