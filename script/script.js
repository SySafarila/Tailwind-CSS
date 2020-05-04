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
    document.getElementById('show').className = "";
}

function hidden() {
    document.getElementById('show').className = "hidden";
}

// New
function clickUl(){
    const nav = document.getElementById('ul-navbar');
    if (nav.classList.contains('scale-y-0') == true) {
        // console.log('true');
        nav.classList.remove('scale-y-0');
    } else {
        // console.log('false');
        nav.classList.add('scale-y-0');
    }
}