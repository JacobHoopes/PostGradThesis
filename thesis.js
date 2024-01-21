
function setup() {
    createCanvas(window.innerWidth-18,window.innerHeight-18);
}

function draw() {
    background(0);
    fill(255);
    if (mouseIsPressed) {
        fill(255);
    } else {
        fill(255, 0, 0);
    }
    ellipse(mouseX,mouseY,40,40);
}