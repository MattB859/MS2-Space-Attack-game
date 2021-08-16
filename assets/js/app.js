const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;

let temp = canvas.height - 90;

// Custom code by developer
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(10, canvas.height - 90, 50, 50);
    requestAnimationFrame(animate);
}
animate()

window.addEventListener('keydown', function(e) {
 if (e.code === 'Space') spacePressed = true;


});
window.addEventListener('keydown', function(e) {
    if (e.code === 'Space') spacePressed = false;
   });
   
// Custom code by developer
window.addEventListener('mousedown', function(e) {
    if (e.code === 'Click') spacePressed = true;

});

// Custom code by developer
window.addEventListener('mouseup', function(e) {
       if (e.code === 'Click') spacePressed = false;
});
