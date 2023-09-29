let project = 1

let changeProject = (direction) => {
    let oldProjectName = `project${project}`;
    const oldProject = document.getElementById(oldProjectName);
    project = project + direction;

    if(project < 1){
        project = 4;
    }else if(project > 4){
        project = 1;
    }

    let newProjectName = `project${project}`;
    const newProject = document.getElementById(newProjectName);

    oldProject.style.display = "none";
    newProject.style.display = "block";
}