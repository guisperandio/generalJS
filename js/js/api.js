"use strict";

function loadUrl(url){
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
}

async function buildHtml(tagName) {
    
    const divImg = document.getElementById('list-images');
    const loadDiv = document.getElementById('load-page');

    loadDiv.className = 'show';

    divImg.innerHTML = '';
    
    let images = await getImgs(tagName);

    images.forEach((element, index) => {
        let mainContainer = document.createElement('div');
        mainContainer.className = 'box-imgs clearfix';
        let html = `
            <div class="img float-left" style="background-image: url(${element.media.m})"></div>
        `;

        mainContainer.innerHTML = html;
        
        divImg.appendChild(mainContainer);
        
    });

    loadDiv.className = '';
    
}

async function getImgs(tagName){
    const limit = 5;
    const apiUrl = `https://api.flickr.com/services/feeds/photos_public.gne?tags=${tagName}&format=json&nojsoncallback=1`;
    
    let images = [];

    let request = loadUrl(apiUrl);

    await Promise.resolve(request)
    .then(data => {
        data.items.forEach((element, index) => {
            if(index >= limit) return false;
            images.push(element);
        });
    });

    return images;
}