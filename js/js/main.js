"use strict";

function start(){
    injectHtml();

    let buttons = document.getElementsByClassName('btn-container');

    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.addEventListener('click', function(event){
            event.target.parentElement.parentElement.setAttribute('type', this.getAttribute('id'));
            getImgs(this.getAttribute('id'));
        });
    }
}
start();