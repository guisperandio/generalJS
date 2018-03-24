"use strict";

function doButtons(buttonName){
    let btnContainer = document.createElement('div');
    let btnText = document.createElement('div');
    let getText = document.createElement('span');

    btnContainer.className = `btn-container btn-${buttonName.toLowerCase()}`;
    btnContainer.setAttribute('id', buttonName.toLowerCase());
    btnText.className = 'btn-text';

    let textNode = document.createTextNode(`${buttonName}`);

    btnText.appendChild(textNode);
    btnContainer.appendChild(btnText);

    return btnContainer;
}

function injectHtml(){

    const allBtns = document.getElementById('all-btns');
    const buttons = ['Cow', 'Dog', 'Giraffe'];

    buttons.forEach(element => {
        allBtns.appendChild(doButtons(element));
    });

}
