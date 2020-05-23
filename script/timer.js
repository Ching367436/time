'use-strict'
const m = document.querySelector('#time');

// a timer function
let t = setInterval(timer, 250);
function timer() {
    const date = new Date;
    let message = formate(date.getHours()) + ':' + formate(date.getMinutes()) + "<span id='second'>:" + formate(date.getSeconds()) + "</span>";
    m.innerHTML = message;
}

// add "0" infront of single digits to make timer prettier.
function formate(t) {
    if (t < 10) {
        return "0" + t;
    } else {
        return t;
    }
}
