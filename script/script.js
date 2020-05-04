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
    const menu = document.getElementById('menu');
    if (nav.classList.contains('scale-y-0') == true) {
        // console.log('true');
        menu.innerHTML = 'menu_open';
        menu.classList.add('rotate-180');
        nav.classList.remove('scale-y-0');
    } else {
        // console.log('false');
        menu.innerHTML = 'menu';
        menu.classList.remove('rotate-180');
        nav.classList.add('scale-y-0');
    }
}