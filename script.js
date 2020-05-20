let t = setInterval(timer, 100);
const m = document.querySelector('#time');
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