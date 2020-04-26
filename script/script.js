const rightButton = document.getElementById('rightButton');

function rightButtonn() {
    if (rightButton.innerHTML == 'menu') {
        rightButton.innerHTML = 'menu_open';
        show();
    } else {
        rightButton.innerHTML = 'menu';
        hidden();
    }
}

function show() {
    document.getElementById('show').className = "md:flex";
}

function hidden() {
    document.getElementById('show').className = "hidden md:flex";
}