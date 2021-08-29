let spaceship = new Image();
spaceship.src = "../assets/images/spaceship.png";

class Bird {
    constructor() {
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.shipWidth = 941;
        this.shipHeight = 680;
        this.width = this.shipWidth/20;
        this.height = this.shipHeight/20;
        this.weight = 1;
    }
    update() {
        let curve = Math.sin(angle) * 20;
        if (this.y > canvas.height - (this.height * 3) + curve) {
            this.y = canvas.height - (this.height * 3) + curve;
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
        }
        if (this.y < 0 + this.height) {
            this.y = 0 + this.height;
            this.vy = 0;
        }
        if (spacePressed + touchScreen && this.y > this.height * 3) this.flap();
    }
    draw() {
        ctx.drawImage(spaceship, 0, 0, this.shipWidth,
        this.shipHeight, this.x - 10,
        this.y - 5, this.width * 1.7, this.height * 1.7);
    }
    flap() {
        this.vy -= 2;
    }
}
const bird = new Bird();