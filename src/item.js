const todo =  (title, description, dueDate, priority) => {

    let checklist = false;
    let project = "Default";

    return {
        title,
        description,
        dueDate,
        priority,
        checklist,  
        project
    };
};

export { todo }