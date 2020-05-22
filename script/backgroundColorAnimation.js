/**
    This script perfom a background color animation.

    usage:
        call backgroundColorAnimation function
        then the background animation will start
**/


// Todo: improve performance

let interval = 100;
let step = 0.01;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor(min = 0, max = 255) {
    return `rgb(${getRandomNumber(min, max)}, ${getRandomNumber(min, max)}, ${getRandomNumber(min, max)})`;
}

function toRgb(r, g, b) {
    return `rgb(${Math.ceil(r)}, ${Math.ceil(g)}, ${Math.ceil(b)})`;
}

function backgroundColorAnimation() {
    animationUtil();
}

function animationUtil(currentR = 0, currentG = 0, currentB = 0) {
    let r = getRandomNumber(0, 230), g = getRandomNumber(0, 230), b = getRandomNumber(0, 230);
    let rStep = (r - currentR) * step;
    let gStep = (g - currentG) * step;
    let bStep = (b - currentB) * step;
    let count = 0;
    animationUtilUtil(count, currentR, currentG, currentB, rStep, gStep, bStep);
}
function animationUtilUtil(count, currentR, currentG, currentB, rStep, gStep, bStep) {
    count += step
    if (count < 1) {
        currentR += rStep;
        currentG += gStep;
        currentB += bStep;
        document.body.style.background = toRgb(currentR, currentG, currentB);
        setTimeout(function () { animationUtilUtil(count, currentR, currentG, currentB, rStep, gStep, bStep) }, interval);
    } else {
        animationUtil(currentR, currentG, currentB);
    }
}
