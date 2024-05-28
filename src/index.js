import './style.css';
import {createTask} from "./task";
import {createProject} from "./project";

function component() {

    let element = document.createElement('div');
    let tasks = [];

    const task1 = createTask("testTask", "2", "1", ["testProject, testProject2"]);
    const project1 = createProject("testProject", "3", [task1]);

    const task2 = createTask("test2", "40/3/1", "5", ["pooopy", "cskjr"]);

    tasks.push(task1);
    tasks.push(task2);

    //print all tasks nicely
    element.appendChild(printTask(tasks));


    return element;
}

function printTask(tasks) {
    let element = document.createElement('div');
    for (let task of tasks) {
        console.log(task.printTask());
        let taskBlock = document.createElement('div');
        taskBlock.innerText = task.printTask();
        taskBlock.classList.add('task');

        element.appendChild(taskBlock);


    }
    return element;
}


document.body.appendChild(component());