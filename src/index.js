import './style.css';
import {createTask} from "./task";

function component() {
    const element = document.createElement('div');

    element.innerText = 'goodbye';
    element.classList.add('hello');

    const task1 = createTask("testTask", "2", "1", ["testProject, testProject2"]);
    //document.body.appendChild(element)
    task1.printTask();

    element.innerText = task1.printTask();


    return element;
}

document.body.appendChild(component());