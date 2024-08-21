
 function createProject(name) {
    return {
        name,
        projects: [],
      }; 
}

function showProject(projectName) {
    const projectBtn = document.createElement('button');
    projectBtn.id = projectName;
    projectBtn.textContent = projectName;

    document.getElementById('project-dropdown-content').appendChild(projectBtn);  
    const projectBtnClone = projectBtn.cloneNode(true);
    document.getElementById('modal-project-dropdown-content').appendChild(projectBtnClone);
}



 export {createProject , showProject};