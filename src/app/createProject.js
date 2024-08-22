import  showTodo  from "./createTodo";
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
    projectBtn.id = project.name;
    projectBtn.textContent = project.name;

    projectDropdownContent.appendChild(projectBtn);  

    const projectBtnClone = projectBtn.cloneNode(true);
    document.getElementById('modal-project-dropdown-content').appendChild(projectBtnClone);

    // if project btn is click show the content in it
    projectBtn.addEventListener('click', () => {
        projectBtn.disabled = true;
        projectDropdownBtn.textContent = '';
        projectDropdownBtn.textContent = projectBtn.textContent;

        const projectContent = document.createElement('div');
        projectContent.classList.add('project-content');

        projectContent.innerHTML = `
            <div class="project-content-title">
                <h2>Project: ${project.name}</h2> <button class="remove-project-btn" id="remove-project-btn">Remove Project</button>
            </div>
            <ul class="project-list">
             
            </ul>
            
        `;

        const content = document.getElementById('content')
        content.appendChild(projectContent);

        if (content.firstChild) {
            content.firstChild.remove();
            projectBtn.disabled = false;
        }
    
    });
}

// create project list object and append to project dropdown content
const addProject = document.querySelector('#createProject');
const existProject = document.querySelector('#project-dropdown-content');
function createProjectModal() {
    if (!addProject.value) return;
    const newProject = addProject.value.trim();
    showTodo();

    const existingProjects = Array.from(existProject.children).map(option => option.textContent);
    if(!existingProjects.includes(newProject)) {
        showProject(newProject);
    }    
    addProject.value = '';
}


 export { createProjectModal };