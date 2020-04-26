const rightButton = document.getElementById('rightButton');

function rightButtonn() {
    if (rightButton.innerHTML == 'menu') {
        rightButton.innerHTML = 'menu_open';
    } else {
        rightButton.innerHTML = 'menu';
    }
}
