function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    windowResized()
    // noCursor();
    rectMode(CENTER);
    // frameRate(10);
}

var first = 1;

function draw() {
    background(0,0,0,70);
    // fill(255);
    // if (mouseIsPressed) {
    //     fill(255);
    // } else {
    //     fill(255, 0, 0);
    // }
    // ellipse(mouseX,mouseY,40,40);
    var margin = (document.documentElement);
    var titleText = document.getElementById("output");
    // var margin = parseInt(window.getComputedStyle(document.documentElement).marginTop,10);
    
    // titleText.innerText=mouseX + ", " + (mouseY);
    titleText.innerText = margin;

    // strokeWeight(5);
    // fill(random(150,255), random(150,255), random(150,255));
    // square(random(0,width), random(0,height), random(0, width), random(0, 100));

    push();
    translate(mouseX, mouseY);
    rotate(frameCount /20.0);
    polygon(0,0,82,5);
    pop();

    if (first) {
        windowResized();
        first = 0;
    }
}

function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape;
    for (let a = 0; a < TWO_PI; a+= angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function windowResized() {
    var titleText = document.getElementById("output");
    // var margin = parseInt(window.getComputedStyle(document.getElementById("mainHTML")).marginTop,10);
    resizeCanvas(window.innerWidth, window.innerHeight - titleText.offsetHeight-4);
}

// document.addEventListener("DOMContentLoaded", function() {
//     windowResized();
// });

