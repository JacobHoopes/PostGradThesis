
function over(x, y, w, h, type) {
    if (type === "rect") {
        return overRect(x, y, w, h);
    } else if (type === "circle") {
        return overCircle(x, y, w, h);
    } else if (type === "line") {
        // return overLine(x, y, w, h, W);
    }
}

function overRect(x, y, w, h) {
    if ((mouseX >= x && mouseX <= x + w) && (mouseY >= y && mouseY <= y + h)) {
        return true;
    } else {
        return false
    }
}   

function overCircle(x, y, w, h) {
    return (Math.sqrt((mouseX - x)**2 + (mouseY - y)**2))
}

function overLine(x, y, w, h, W) {
    return false;
}

function sign(x1, y1, x2, y2, x3, y3) {
    return (x1 - x3) * (y2 - y3) - (x2 - x3) * (y1 - y3);
}

function overTriangle(x1, y1, x2, y2, x3, y3) {
    let d1 = sign(mouseX, mouseY, x1, y1, x2, y2);
    let d2 = sign(mouseX, mouseY, x2, y2, x3, y3);
    let d3 = sign(mouseX, mouseY, x3, y3, x1, y1);

    let neg = d1 < 0 || d2 < 0 || d3 < 0;
    let pos = d1 > 0 || d2 > 0 || d3 > 0;

    return !(neg && pos);
}

function overQuad(x1, y1, x2, y2, x3, y3, x3, y4) {
    let d1 = sign(mouseX, mouseY, x1, y1, x2, y2);
    let d2 = sign(mouseX, mouseY, x2, y2, x3, y3);
    let d3 = sign(mouseX, mouseY, x3, y3, x4, y4);
    let d4 = sign(mouseX, mouseY, x4, y4, x1, y1);

    let neg = d1 < 0 || d2 < 0 || d3 < 0 || d4 < 0;
    let pos = d1 > 0 || d2 > 0 || d3 > 0 || d4 > 0;

    return !(neg && pos);
}



function lock(val, minv, maxv) {
    return min(max(val, minv), maxv);
}