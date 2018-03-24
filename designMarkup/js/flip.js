"use strict";
function script(){
    let addClick = () => {
        var cardContainer = document.getElementById('card-container');
        if (cardContainer.className.indexOf('flip') != -1) {
            cardContainer.className = 'card-container';
        } else {
            cardContainer.className += ' flip';
        }
    };
    let flipBtn = document.getElementsByClassName('flipBtn');
    
    for (let i = 0; i < flipBtn.length; i++) {
        flipBtn[i].addEventListener('click', addClick, false);
    }
};