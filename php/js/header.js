"use strict";

function getHeader(){
    let htmlHeader = `
        <div id="menu-btn" class="slider-btn">
            <div class="slider-btn-slider">
                <div class="slider-btn-block">
                    <h3 class="tl-big white"><i class="fas fa-times white ic-position"></i>Menu</h3>
                </div>
                <div class="slider-btn-block">
                    <h3 class="tl-big white"><i class="fas fa-bars white ic-position"></i>Menu</h3>
                </div>
            </div>
        </div>
    `;

    return htmlHeader;
}

function getMenu(buttons){
    let htmlMenu = `
        <div class="drawer-inner">
                <ul class="drawer-list">
    `;
    buttons.forEach((element, index) => {
        htmlMenu += `
                    <li class="menu-item" data-id="${element}">
                        <div class="bg-highlight"></div>
                        <div class="name">
                            <h3>${element}</h3>
                        </div>
                    </li>
        `;
    });

    htmlMenu += `
            </ul>
        </div>
    `;

    return htmlMenu;
}

async function buildMenu(){

    let myHeader = document.getElementById('myHeader');
    let wrapper = document.getElementById('wrapper');
    
    let buttons = ['Design Markup', 'Javascript', 'PHP', 'LinkedIn', 'Github'];
    
    let htmlHeader = await getHeader();    
    let htmlMenu = await getMenu(buttons);

    await injectHeader(htmlHeader, htmlMenu, myHeader, wrapper);
    await injectScripts();

    setListener();
    
}

function setListener(){
    let buttons = document.getElementsByClassName('slider-btn-block');
    
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.addEventListener('click', function (event) {
            this.parentElement.parentElement.classList.toggle('flip');
        });
    }
}

function injectHeader(htmlHeader, htmlMenu, myHeader, wrapper){
    let headerInner = document.createElement('div');
    let menuDrawer = document.createElement('div');

    headerInner.setAttribute('id', 'header-inner');
    menuDrawer.setAttribute('id', 'menu-drawer');
    menuDrawer.className = 'drawer';

    headerInner.innerHTML = htmlHeader;
    menuDrawer.innerHTML = htmlMenu;

    myHeader.appendChild(headerInner);
    wrapper.appendChild(menuDrawer);

}

function injectScripts(){
    let scriptFA = document.createElement('script');
    scriptFA.src = 'https://use.fontawesome.com/releases/v5.0.8/js/solid.js';
    scriptFA.integrity = 'sha384-+Ga2s7YBbhOD6nie0DzrZpJes+b2K1xkpKxTFFcx59QmVPaSA8c7pycsNaFwUK6l';
    scriptFA.crossOrigin = 'anonymous';
    scriptFA.defer = 'defer';

    let scriptFA2 = document.createElement('script');
    scriptFA2.src = 'https://use.fontawesome.com/releases/v5.0.8/js/fontawesome.js';
    scriptFA2.integrity = 'sha384-7ox8Q2yzO/uWircfojVuCQOZl+ZZBg2D2J5nkpLqzH1HY0C1dHlTKIbpRz/LG23c';
    scriptFA2.crossOrigin = 'anonymous';
    scriptFA2.defer = 'defer';

    document.getElementById('wrapper').appendChild(scriptFA);
    document.getElementById('wrapper').appendChild(scriptFA2);
}

buildMenu();