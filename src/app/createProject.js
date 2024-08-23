import  showTodo  from "./createTodo";
import projectModal from "./todoModal";
 function createProject(name) {
    return {
        name,
        projects: [],
      }; 
}
//create project button and clone btn to the modal of Todo
const projectDropdownContent = document.getElementById('project-dropdown-content');
const projectDropdownBtn = document.getElementById('project-dropdown-btn');
function showProject(projectName) {
    const project = createProject(projectName);
    const projectBtn = document.createElement('button');
    projectBtn.type = 'button';
    projectBtn.id = project.name;
    projectBtn.textContent = project.name;

    projectDropdownContent.appendChild(projectBtn);  

    const projectBtnClone = projectBtn.cloneNode(true);
    document.getElementById('modal-project-dropdown-content').appendChild(projectBtnClone);

    // if project btn is click show the content in it
    projectBtn.addEventListener('click', () => {
        projectDropdownBtn.textContent = '';
        projectDropdownBtn.textContent = projectBtn.textContent;
        projectModal(project);

        const content = document.getElementById('content')
        if (content.firstChild) {
            content.firstChild.remove();
        }
    });
}

// create project list object and append to project dropdown content
const addProject = document.querySelector('#createProject');
const existProject = document.querySelector('#project-dropdown-content');
function displayingProject() {
    if (!addProject.value) return;
    const newProject = addProject.value.trim();
    showTodo();

    const existingProjects = Array.from(existProject.children).map(option => option.textContent);
    if(!existingProjects.includes(newProject)) {
        showProject(newProject);
    }    
    addProject.value = '';
}


 export { displayingProject };