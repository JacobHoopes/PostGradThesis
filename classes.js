
class Thing {
    constructor(x, y, diameter, velX, velY) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.velX = velX;
        this.velY = velY;
    }

    adjust() {
        if (this.x - this.diameter/2 < 0) {
            this.velX = abs(this.velX);
        } else if (this.x + this.diameter/2 > width) {
            this.velX = -abs(this.velX);
        }
        if (this.y - this.diameter/2 < 0) {
            this.velY = abs(this.velY);
        } else if (this.y + this.diameter/2 > height) {
            this.velY = -abs(this.velY);
        }
        
        this.x = this.x+this.velX;
        this.y = this.y+this.velY;
    }
    
    display() {
        ellipse(this.x, this.y, this.diameter)
    }
}