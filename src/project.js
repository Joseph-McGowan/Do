function createProject(name, dueDate, taskList) {

    let projectName = name;
    let taskDueDate = dueDate;
    let projectTaskList = taskList;

    const printProject = () => ("Project" + projectName + "is due " + taskDueDate);

    const displayProject = () => {
        let element = document.createElement('div');
        element.classList.add('projectNavBar');
        //let projectInfo = document.createElement('div')
        element.innerText = projectName;

        return element;
    }

    return {projectName, taskDueDate, projectTaskList, printProject, displayProject};
}

export {createProject};