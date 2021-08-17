class Bird {

    constructor(){
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.width = 20;
        this.height = 20;
        this.weight = 1;
    }
    update(){
        if (this.y > canvas.height - (this.height * 3)){
            this.y = canvas.height - (this.height * 3);
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.y += this.vy;
        } if (spacePressed) this.flap();
       
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    flap(){
        this.vy -= 2;
    }
}
const bird = new Bird();