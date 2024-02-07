function createAndAppendElement(type, content, container){
    const element = document.createElement(type);
    container.append(element);
     element.innerText = content;

    return element;
}