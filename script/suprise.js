// to have some probibility to use background color animation
let probibility = 1;

document.body.onload = function () {
    if (Math.random() <= probibility) {
        backgroundColorAnimation();
    }
}
