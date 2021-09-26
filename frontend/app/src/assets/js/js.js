function tokyo2020animation() {
    tokyo2020.classList.add('tokyo2020hover');
    setTimeout("stop()", 4000);
}

function stop() {
    tokyo2020.classList.remove('tokyo2020hover');
}

function addc3(x) {
    if (x)
        circleHeader3.classList.add('circleHeader3hover');
    else
        circleHeader3.classList.remove('circleHeader3hover');
}