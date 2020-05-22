// to have some probibility to use background color animation
let probibility = 0.3;

document.body.onload = function () {
    if (Math.random() <= probibility) {
        backgroundColorAnimation();
    }
}
