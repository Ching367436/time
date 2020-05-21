let t = setInterval(timer, 100);
const m = document.querySelector('#time');
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