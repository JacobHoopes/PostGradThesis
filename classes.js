
class Thing {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.parent = 'none';
        this.over = false;
        this.selected = false;
        this.color = [200,200,200];
        this.mouseDiffX = 20;
        this.mouseDiffY = 20;
    }
    

    update() {
        // if (mousePressed && this.over) {
        //     this.selected = true;
        // }
        if (!mouseIsPressed) {
            this.selected = false;
        }
        
        if (this.selected) {
            this.x = mouseX - this.mouseDiffX;
            this.y = mouseY - this.mouseDiffY;
        } else {
            this.mouseDiffX = mouseX - this.x;
            this.mouseDiffY = mouseY - this.y;
        }
    }
    
    display() {
        stroke(0);
        strokeWeight(3);
        fill(150);
        if (this.selected) {
            fill(0,255,255);
        } else if (this.over) {
            fill(255,0,0);
        }
        rect(this.x, this.y, this.w, this.h);
    }

    over() {
        return this.over;
    }

    setOver(bool) {
        this.over = bool;
    }
}
