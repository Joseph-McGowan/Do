import './style.css';
import {createTask} from "./task";
import {createProject} from "./project";

function component() {


    let container = document.querySelector(".layout");
    let element = document.createElement('div');
    let navBar = document.querySelector('.projectNavigation');

    let tasks = []; //TODO make tasklist part of task class
    let projects = []; //TODO make projectList class, can add to project class, priority queue
    //test tasks
    const task1 = createTask("testTask", "2", "1", ["testProject, testProject2"]);
    const task2 = createTask("test2", "40/3/1", "5", ["pooopy", "cskjr"]);

    tasks.push(task1);
    tasks.push(task2);

    //test project
    const project1 = createProject("testProject", "3", [task1]);


    projects.push(project1);

    for (let i of projects) {

        navBar.appendChild(i.displayProject());
    }

    //print all tasks nicely
    element.appendChild(printTask(tasks));
    container.appendChild(element);



    //return element;
    return 0;

}


function printProject(project) {
    let element = document.createElement('div');
    element.classList.add('projectNavBar');
    //let projectInfo = document.createElement('div')
    element.innerText = project.projectName;

    return element;

}

function printTask(tasks) {
    let element = document.createElement('div');
    element.classList.add('taskHolder')
    for (let task of tasks) {
        console.log(task.printTask());
        let taskBlock = document.createElement('div');
        taskBlock.innerText = task.printTask();
        taskBlock.classList.add('task');

        element.appendChild(taskBlock);


    }
    return element;
}

component();
