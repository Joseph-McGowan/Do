function createTask(name, dueDate, priority, project) {
    const taskName = name;
    const taskDueDate = dueDate;
    const taskPriority = priority;
    const projectList = [project];

    const setPriority = (priority) => {
        this.taskPriority = priority
    };

    const printTask = () => ("name : " + taskName + "\n");

    return {taskName, taskDueDate, taskPriority, projectList, setPriority, printTask};


}

export {createTask};