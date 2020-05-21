let t = setInterval(timer, 250);
let suprise = Math.random() > 0.7;
const m = document.querySelector('#time');
let interval = 100;
let step = 0.01;
if (suprise) {
    if (Math.random() > 0.5) {
        document.body.style.background = "linear-gradient(-37deg, #f8226c, #36b4ff)";
    } else {
        backgroundAnimation();
        m.innerHTML = "Start!";
    }
}
m.addEventListener("dblclick", toggleFullScreen);
function timer() {
    const date = new Date;
    let message = formate(date.getHours()) + ':' + formate(date.getMinutes()) + "<span id='second'>:" + formate(date.getSeconds()) + "</span>";
    m.innerHTML = message;
}
function formate(t) {
    if (t < 10) {
        return "0" + t;
    } else {
        return t;
    }
}
function toggleFullScreen() {
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor(min = 0, max = 255) {
    return `rgb(${getRandomNumber(min, max)}, ${getRandomNumber(min, max)}, ${getRandomNumber(min, max)})`;
}

function toRgb(r, g, b) {
    return `rgb(${Math.ceil(r)}, ${Math.ceil(g)}, ${Math.ceil(b)})`;
}

function backgroundAnimation() {
    animationUtil();
}

function animationUtil(currentR = 0, currentG = 0, currentB = 0) {
    let r = getRandomNumber(0, 210), g = getRandomNumber(0, 210), b = getRandomNumber(0, 210);
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
