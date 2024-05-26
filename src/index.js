import './style.css';

function component() {
    const element = document.createElement('div');

    element.innerText = 'goodbye';
    element.classList.add('hello');

    //document.body.appendChild(element)

    return element;
}

document.body.appendChild(component());