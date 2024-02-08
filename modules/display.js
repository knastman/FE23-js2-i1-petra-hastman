function createAndAppendElement(type, content, container){
    const element = document.createElement(type);
    container.append(element);
    if(type === 'img') element.src = content;
    else element.innerText = content;

    return element;
}

function displayPlayerInfo(playerInfo, container){
    createAndAppendElement('h3', playerInfo, container);
    
}

export {displayPlayerInfo}