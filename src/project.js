function createProject(name, dueDate, taskList) {

    let projectName = name;
    let taskDueDate = dueDate;
    let projectTaskList = taskList;

    const printTask = () => ("Task" + projectName + "is due " + taskDueDate);

    return {projectName, taskDueDate, projectTaskList, printTask};
}

export {createProject};