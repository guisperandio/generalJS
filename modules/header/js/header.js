"use strict";
const containerName = 'main-container';
const headerName = 'myHeader';

function getIcons(){
    let buttonIcons = {
        'DesignMarkup': {
            'icon': '<span class="fas fa-object-group ic-btn"></span>',
            'link': './designMarkup/index.html'
        },
        'Javascript': {
            'icon': '<span class="fab fa-js-square ic-btn"></span>',
            'link': './js/index.html'
        },
        'PHP': {
            'icon': '<span class="fab fa-php ic-btn"></span>',
            'link': './php/index.php'
        },
        'LinkedIn': {
            'icon': '<span class="fab fa-linkedin ic-btn"></span>',
            'link': 'https://linkedin.com/in/guisperandio'
        },
        'Github': {
            'icon': '<span class="fab fa-github-square ic-btn"></span>',
            'link': 'https://github.com/guisperandio'
        }
    }

    return buttonIcons;
}

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
    
    let buttonIcons = getIcons();

    let htmlMenu = `
        <div class="drawer-inner">
                <ul class="drawer-list">
    `;
    buttons.forEach((element, index) => {
        htmlMenu += `
                    <li class="menu-item" data-id="${element}">
                        <div class="bg-highlight"></div>
                        <div class="name">
                            <h3>${buttonIcons[element.replace(' ', '')].icon}${element}</h3>
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

    let myHeader = document.getElementById(headerName);
    let wrapper = document.getElementById(containerName);
    
    let buttons = ['Design Markup', 'Javascript', 'PHP', 'LinkedIn', 'Github'];
    
    let htmlHeader = await getHeader();    
    let htmlMenu = await getMenu(buttons);
    
    await injectScripts();
    await injectHeader(htmlHeader, htmlMenu, myHeader, wrapper);
    
    setListener();
    
}

function setBtnList(elements){
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.addEventListener('click', async function (event) {
            switch (element.className) {
                case 'slider-btn-block':
                    document.getElementById('menu-drawer').classList.toggle('show')
                    this.parentElement.parentElement.classList.toggle('flip');
                    break;
                case 'menu-item':
                    if (document.getElementById('active')){
                        document.getElementById('active').setAttribute('id', '');
                    }
                    await this.setAttribute('id', 'active');
                    await setTimeout(() => {
                        document.getElementById('menu-drawer').classList.toggle('show')
                        document.getElementById('menu-btn').classList.toggle('flip')
                    }, 300);
                    clearTimeout();

                    let btnLinks = getIcons();
                    let object = document.getElementById('myObject');
                    console.log(this.getAttribute('data-id').replace(' ', ''));
                    if (this.getAttribute('data-id').replace(' ', '') != 'LinkedIn' && this.getAttribute('data-id').replace(' ', '') != 'Github') {
                        object.setAttribute('data', btnLinks[this.getAttribute('data-id').replace(' ', '')].link);
                    } else {
                        window.open(btnLinks[this.getAttribute('data-id').replace(' ', '')].link, '_blank');
                    }
                    
                    break;
            }
        });
    }
}

async function setListener(){
    let topButtons = document.getElementsByClassName('slider-btn-block');
    let menuButtons = document.getElementsByClassName('menu-item');

    await setBtnList(topButtons);
    await setBtnList(menuButtons);
    
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

async function injectScripts(){
    let scriptFA = document.createElement('script');
    scriptFA.src = 'https://use.fontawesome.com/releases/v5.0.8/js/all.js';
    scriptFA.integrity = 'sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ';
    scriptFA.crossOrigin = 'anonymous';
    scriptFA.defer = 'defer';

    document.getElementById(containerName).appendChild(scriptFA);
}

buildMenu();