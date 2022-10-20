const todo =  (title, description, dueDate, priority, project,timeline) => {

    return {
        title,
        description,
        dueDate,
        priority,  
        project,
        timeline
    };
};

const createProject = (projectname) => {

    let newProject = projectname;

    return {
        newProject
    }

}

export { todo, createProject }