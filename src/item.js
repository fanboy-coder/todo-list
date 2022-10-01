const todo =  (title, description, dueDate, priority, project) => {

    return {
        title,
        description,
        dueDate,
        priority,  
        project
    };
};

const createProject = (projectname) => {

    let newProject = projectname;

    return {
        newProject
    }

}

export { todo, createProject }