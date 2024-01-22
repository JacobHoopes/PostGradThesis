
let balls = [];
const ballDiameter = 40;
const maxInitalV = 5;

var first = 1;

function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    windowResized()
    // noCursor();
    frameRate(30);
}

function draw() {
    var titleText = document.getElementById("output");
    titleText.innerText = mouseX + ", " + (mouseY);
    background(0,0,0,70);
    noStroke();
    strokeWeight(1);
    for (let i = 0; i < balls.length; i++) {
        balls[i].adjust();
        balls[i].display();
        for (let j = 0; j < i; j++) {
            if (distance(balls[i].x,balls[i].y,balls[j].x,balls[j].y) < ballDiameter) {
                // strokeWeight(4);
                // stroke(255,0,0);

                let A = createVector(balls[i].x, balls[i].y);
                let B = createVector(balls[j].x, balls[j].y);
                let M = p5.Vector.add(A, B).mult(0.5);

                let Ai = createVector(balls[i].x-balls[i].velX*20, balls[i].y-balls[i].velY*20);
                let Bi = createVector(balls[j].x-balls[j].velX*20, balls[j].y-balls[j].velY*20);

                let AB = p5.Vector.sub(B, A);

                // line(A.x, A.y, M.x, M.y);
                // stroke(0,255,255);
                // let angle = atan2(M.y - A.y, M.x - A.x);
                // let degrees = (angle * (180/Math.PI) + 180) % 360; // mirror line angle
                
                
                // let angle1 = atan2(A.y - Ai.y, A.x - Ai.x);
                // let degrees1 = (angle1 * (180/Math.PI) + 180) % 360; // incoming angle

                // let degrees = degreesBetweenVectors(A.x, A.y, M.x, M.y);
                // let degrees1 = degreesBetweenVectors(Ai.x, Ai.y, A.x, A.y);
                // let newDegrees = degrees - (degrees1 - degrees); // outgoing angle
                // let newAngle = (newDegrees)/(180/Math.PI);
                // let x1 = Math.cos(newAngle);
                // let y1 = Math.sin(newAngle);
                // line(A.x+distance(Ai.x, Ai.y, A.x, A.y)*x1, A.y+distance(Ai.x, Ai.y, A.x, A.y)*y1, A.x, A.y);
                // line(Ai.x, Ai.y, A.x, A.y);


                // stroke(255,255,0);


                // let degreesB = degreesBetweenVectors(B.x, B.y, M.x, M.y);
                // let degreesB1 = degreesBetweenVectors(Bi.x, Bi.y, B.x, B.y);
                // let newDegreesB = degreesB - (degreesB1 - degreesB); // outgoing angle
                // let newAngleB = (newDegreesB)/(180/Math.PI);
                // let x1B = Math.cos(newAngleB);
                // let y1B = Math.sin(newAngleB);
                // line(B.x+distance(Bi.x, Bi.y, B.x, B.y)*x1B, B.y+distance(Bi.x, Bi.y, B.x, B.y)*y1B, B.x, B.y);
                // line(Bi.x, Bi.y, B.x, B.y);

                let aBounce = getBounceVector(Ai, A, M);
                let bBounce = getBounceVector(Bi, B, M);
                titleText.innerText = "a: " + aBounce.x + ", " + aBounce.y;
                let iVel = sqrt(balls[i].x**2 + balls[i].y**2);
                let jVel = sqrt(balls[j].x**2 + balls[j].y**2);
                strokeWeight(4);
                stroke(0,255,255);
                let lengthA = distance(Ai.x, Ai.y, A.x, A.y)/20;
                let lengthB = distance(Bi.x, Bi.y, B.x, B.y)/20;
                // line(center.x+distance(initial.x, initial.y, center.x, center.y)*x1, center.y+distance(initial.x, initial.y, center.x, center.y)*y1, center.x, center.y);
                line(B.x+lengthA*bBounce.x, B.y+lengthA*bBounce.y, B.x, B.y);
                balls[j].velX = lengthA*bBounce.x;
                balls[j].velY = lengthA*bBounce.y;
                balls[i].velX = lengthB*aBounce.x;
                balls[i].velY = lengthB*aBounce.y;
                stroke(0,255,0);
                line(A.x+lengthB*aBounce.x, A.y+lengthB*aBounce.y, A.x, A.y);
                strokeWeight(1);
                stroke(255);

                if (distance(A.x, A.y, B.x, B.y) < ballDiameter) {
                    balls[i].x = M.x - AB.x;
                    balls[i].y = M.x - AB.y;
                    balls[j].x = M.x + AB.x;
                    balls[j].y = M.x + AB.y;
                }

                // balls[i].velX = bBounce.x * Math.cos(iVel);
                // balls[i].velY = bBounce.y * Math.sin(jVel);
                // balls[j].velX = aBounce.x * Math.cos(iVel);
                // balls[j].velY = aBounce.y * Math.sin(jVel);


                // titleText.innerText = iVel + " and " + jVel;;



                // let AC = createVector(-AB.y, AB.x); // 
                // let C = p5.Vector.add(M, AC);
                // let D = p5.Vector.sub(M, AC);
                // line(C.x, C.y, D.x, D.y);



                // function calculateRebounds(axv, ayv, ax, ay, bxv, byv, bx, by, xm, ym) { // the relevant info to calculate outgoing angles and velocities
                //     let Ai = createVector(ax)
                    
                //     let aFinal = createVector();
                //     let bFinal = createVector();
                //     return [aFinal, bFinal]
                // }

                // stroke(0,0,255);
                // let reflectAngleA = degrees(atan2(B.y - A.y, B.x - A.x));
                // let incomingAngleA = degrees(atan2(Ai.y - A.y, Ai.x - A.x));
                // line(A.x,A.y,A.x+20*cos(reflectAngleA),A.y+20*-sin(reflectAngleA));
                // stroke(0,255,255);
                // line(A.x,A.y,A.x+20*cos(incomingAngleA),A.y+20*-sin(incomingAngleA));

                // stroke(0,0,255);
                // let reflectAngleB = degrees(atan2(B.y - A.y, B.x - A.x));
                // let incomingAngleB = degrees(atan2(Ai.y - A.y, Ai.x - A.x));
                // line(width/2,height/2,width/2+20*cos(reflectAngleA),height/2+20*-sin(reflectAngleA));
                // stroke(0,255,255);
                // line(width/2,height/2,width/2+20*cos(incomingAngleA),height/2+20*-sin(incomingAngleA));

                // noStroke();
                // strokeWeight(1);
                // noLoop();

            }
        }
    }

    // fill(255,0,255);
    
    // if (mouseIsPressed) {
    //     fill(255);
    // }
    // ellipse(mouseX,mouseY,40);

    

    if (first) {
        windowResized();
        first = 0;
    }

}

function windowResized() {
    var titleText = document.getElementById("output");
    resizeCanvas(window.innerWidth, window.innerHeight - titleText.offsetHeight-4);
}

function mouseClicked() {
    const velX = random(-maxInitalV, maxInitalV);
    const velY = random(-maxInitalV, maxInitalV);
    if (balls.length >= 15) {
        balls.shift();
    }
    balls.push(new Thing(mouseX, mouseY, ballDiameter, velX, velY));
}
// document.addEventListener("DOMContentLoaded", function() {
//     windowResized();
// });

function distance(x1, y1, x2, y2) {
    return sqrt((x2-x1)**2+(y2-y1)**2);
}

function degreesBetweenVectors(V1x, V1y, V2x, V2y) {
    let V1 = createVector(V1x, V1y);
    let V2 = createVector(V2x, V2y);
    let angle = atan2(V2.y - V1.y, V2.x - V1.x);
    let degrees = (angle * (180/Math.PI) + 180) % 360;
    return degrees;
}

function getBounceVector(initial, center, contact) {
    let degrees = degreesBetweenVectors(center.x, center.y, contact.x, contact.y);
    let degrees1 = degreesBetweenVectors(initial.x, initial.y, center.x, center.y);
    let newDegrees = degrees - (degrees1 - degrees); // outgoing angle
    let newAngle = (newDegrees)/(180/Math.PI);
    let x1 = Math.cos(newAngle);
    let y1 = Math.sin(newAngle);
    let finalVector = createVector(x1, y1);
    strokeWeight(3);
    stroke(255,0,0);
    // line(center.x+distance(initial.x, initial.y, center.x, center.y)*x1, center.y+distance(initial.x, initial.y, center.x, center.y)*y1, center.x, center.y);
    // line(initial.x, initial.y, center.x, center.y);
    strokeWeight(1);
    stroke(255);

    return finalVector;
}