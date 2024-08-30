import projectModal, { removeProjectFirstChild } from "./projectModal";
import { loadTodoContent } from "./createTodo";
function createProject(name) {
    return {
        name,
        projects: [],
      }; 
}
function getProject (projectName) {
    return{
        name: projectName,
        projects: [],
    }
}

//create project button and clone btn to the modal of Todo
const projectDropdownContent = document.getElementById('project-dropdown-content');
const modalProjectDropdownContent = document.getElementById('modal-project-dropdown-content');
const modalProjectDropdownBtn = document.getElementById('modal-project-dropdown-btn');
function showProject (projectName) {  
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
        loadTodoContent(project.name);
       
    });

    const modalProjectBtn = document.getElementById(`${projectBtnClone.id}`);
    modalProjectBtn.addEventListener('click', (event) => {
        event.preventDefault();
        modalProjectDropdownBtn.textContent = '';
        modalProjectDropdownBtn.textContent = project.name;
        removeProjectFirstChild();
        projectModal(project);
        loadTodoContent(project.name);
    });

    // display content when a project btn is created
    removeProjectFirstChild();
    projectModal(project);
}

// create project list object and append to project dropdown content
const existProject = document.querySelector('#project-dropdown-content');
function displayingProject (addProject) {
    if (!addProject.value) return;
    const newProject = addProject.value.trim();   

    const existingProjects = Array.from(existProject.children).map(option => option.textContent);
    if(!existingProjects.includes(newProject)) {
        showProject(newProject);
        localStorage.setItem(newProject, JSON.stringify(createProject(newProject)));
    }    
    addProject.value = '';
}


export { displayingProject, showProject, getProject };