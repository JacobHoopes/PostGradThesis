
let first = 1;
let things = [];

function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    windowResized()
    frameRate(30);

    userSelectDefault = document.body.style.userSelect; // prevents highlighting of text while dragging
}

function draw() {
    let titleText = document.getElementById("output");
    let newtext = "";
    if (things.length > 0) {
        newtext = things[things.length-1].mouseDiffX;
    }
    titleText.innerText = mouseX + ", " + (mouseY) + " # of things: " + things.length;
    // background(0,0,0,70);
    background(255);
    let overSomething = false;
    let selectedSomething = false;
    // for (let i = things.length - 1; i >= 0; i--) {
    //     if (things[i].over) {
    //         overSomething = true;
    //         break;
    //     }
    // }
    for (let i = things.length - 1; i >= 0; i--) {
        if (things[i].selected) {
            selectedSomething = true;
            break;
        }
    }
    for (let i = things.length - 1; i >= 0; i--) {
        if (over(things[i].x, things[i].y, things[i].w, things[i].h, "rect") && !selectedSomething) {
            things[i].over = true;
            overSomething = true;
            for (let j = things.length - 1; j >= 0; j--) {
                if (i !== j) {
                    things[j].over = false;
                }
            }
            if (mousePressed && !selectedSomething) {
                things[i].selected = true;

                let temp = things[i];
                things.splice(i,1);
                things.push(temp);
            }
            break;
        }
        things[i].over = false;


    }

    for (let i = 0; i < things.length; i++) {
        for (let j = i + 1; j < things.length; j++) {
            stroke(0);
            strokeWeight(2);
            let A = things[i];
            let B = things[j];
            line(A.x+A.w/2, A.y+A.h/2, B.x+B.w/2, B.y+B.h/2);
        }
    }
    
    for (let i = 0; i < things.length; i++) {
        things[i].update();
        things[i].display();
    }

    if (first) {
        windowResized();
        first = 0;
    }
}

function windowResized() {
    let titleText = document.getElementById("output");
    resizeCanvas(window.innerWidth, window.innerHeight - titleText.offsetHeight-4);
}

function mousePressed() {
    let overSomething = false;
    document.body.style.userSelect = "none"; 
    for (let i = things.length - 1; i >= 0; i--) {
        if (things[i].over) {
            overSomething = true;
            things[i].selected = true;
        }
    }

    if (!overSomething) {
        things.push(new Thing(mouseX-20, mouseY-20, 40, 40));
    }
}

function mouseReleased() {
    document.body.style.userSelect = userSelectDefault;
    for (let i = 0; i < things.length; i++) {
        things[i].selected = false;
    }
    // return false;
}