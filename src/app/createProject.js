import  showTodo  from "./createTodo";
import projectModal, { removeProjectFirstChild } from "./projectModal";

 function createProject(name) {
    return {
        name,
        projects: [],
      }; 
}


//create project button and clone btn to the modal of Todo
const projectDropdownContent = document.getElementById('project-dropdown-content');

function showProject(projectName) { 
    const modalProjectDropdownContent = document.getElementById('modal-project-dropdown-content');
    const modalProjectDropdownBtn = document.getElementById('modal-project-dropdown-btn');
    const project = createProject(projectName);

    const projectBtn = document.createElement('button');
    projectBtn.type = 'button';
    projectBtn.id = `${project.name}-btn`;
    projectBtn.textContent = project.name;
   
    // append to the main dropdown content and clone to the modal
    projectDropdownContent.appendChild(projectBtn);  
    const projectBtnClone = projectBtn.cloneNode(true);
    projectBtnClone.id = `modal-${projectBtn.id}`;
    modalProjectDropdownContent.appendChild(projectBtnClone);

    
    // if project btn is click show the content in it
    projectBtn.addEventListener('click', () => {
        removeProjectFirstChild()
        projectModal(project);
        console.log(project);
    
    });
    const modalProjectBtn = document.getElementById(`${projectBtnClone.id}`);
    modalProjectBtn.addEventListener('click', (event) => {
        event.preventDefault();
        modalProjectDropdownBtn.textContent = '';
        modalProjectDropdownBtn.textContent = project.name;
    });

    // pop up when a project btn is created
    removeProjectFirstChild();
    projectModal(project);
}

// create project list object and append to project dropdown content
const addProject = document.querySelector('#createProject');
const existProject = document.querySelector('#project-dropdown-content');
function displayingProject() {
    if (!addProject.value) return;
    const newProject = addProject.value.trim();
    

    const existingProjects = Array.from(existProject.children).map(option => option.textContent);
    if(!existingProjects.includes(newProject)) {
        showProject(newProject);
        localStorage.setItem(`${newProject}`, JSON.stringify(newProject));
    }    
    addProject.value = '';

}


 export { displayingProject, showProject };