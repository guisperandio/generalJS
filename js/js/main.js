"use strict";

function start(){
    injectHtml();

    let buttons = document.getElementsByClassName('btn-container');

    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        const id = element.getAttribute('id');
        console.log(id);
        element.addEventListener('click', () => {
            document.getElementById('main-container').className += ' imgReady';
            buildHtml(id);
        });
    }
}
start();