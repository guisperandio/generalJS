"use strict";

async function getImgs(tagName) {
    const loadDiv = document.getElementById('load-page');
    const divImg = document.getElementById('list-images');

    loadDiv.className = 'show';

    const apiUrl = `https://api.flickr.com/services/feeds/photos_public.gne?tags=${tagName}&format=json&jsoncallback=generateHtml`;

    divImg.innerHTML = '';

    await loadApi(apiUrl);

}

function loadApi(url) {

    var script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
    document.head.removeChild(script);

    return true;
}

async function generateHtml(data){

    const limit = 5;
    const loadDiv = document.getElementById('load-page');
    const divImg = document.getElementById('list-images');

    let images = data.items.filter((elem, i, array) => {
        return array.indexOf(elem) < limit;
    });

    await images.forEach((element, index) => {

        let mainContainer = document.createElement('div');
        mainContainer.className = 'box-imgs';
        let html = `
            <div class="img float-left" style="background-image: url(${element.media.m})"></div>
        `;

        mainContainer.innerHTML = html;

        divImg.appendChild(mainContainer);

    });

    loadDiv.className = '';
}