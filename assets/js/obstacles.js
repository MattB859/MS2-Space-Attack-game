const obstaclesArray = [];

class Obstacle {
    constructor() {
        this.top = (Math.random() * canvas.height/3);
        this.bottom = (Math.random() * canvas.height/3) + 20;
        this.x = canvas.Width;
        this.width = 20;
        this.color = 'hsl(' + hue + '100%, 50%';
    }
    draw(){ 
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    } 
    update(){
       this.x -= gamespeed;
       this.draw(); 
    }   
}