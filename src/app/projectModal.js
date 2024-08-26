import { createTodo } from "./createTodo";

const modalDropdownBtn = document.getElementById('modal-project-dropdown-btn');
const content = document.querySelector('#content');
const projectDropdownBtn = document.getElementById('project-dropdown-btn'); 

function projectModal(project) { 
   
    const projectBtn = document.getElementById(`${project.name}-btn`);
    const modalProjectBtn = document.getElementById(`modal-${project.name}-btn`);
   
    projectDropdownBtn.textContent = '';
    projectDropdownBtn.textContent = project.name;

    const projectContent = document.createElement('div');
    projectContent.classList.add('project-content');
    projectContent.id = project.name;
    projectContent.innerHTML = `
        <div class="project-content-title">
          <div><p><strong>Project:</strong></p><h2>${project.name}</h2></div>  <button class="remove-project-btn" id="remove-${projectContent.id}">Remove Project</button>
        </div>
        <div class="project-todo-container" id="project-todo-container">
            <ul class="project-todo-list" id="project-${project.name}-list">
            
            </ul>   
        </div>

        
    `;
    content.appendChild(projectContent);
   
    // remove project button
    const removeProjectBtn = document.getElementById(`remove-${projectContent.id}`);
    removeProjectBtn.addEventListener('click', () => { 
       
        projectDropdownBtn.textContent = '';                     
        projectDropdownBtn.innerHTML = 'All Projects <i class="fa-solid fa-arrow-down-short-wide"></i>';
        modalDropdownBtn.textContent = '';
        modalDropdownBtn.innerHTML = 'Project (none) <i class="fa-solid fa-arrow-down"></i>';
       
        projectBtn.remove();
        projectContent.remove();
        modalProjectBtn.remove();
        delete localStorage[project.name];
    }) 
    return content;
}



// Remove project
function removeProjectFirstChild() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild); // remove the first child element of the content element();
    }
    
}

export { removeProjectFirstChild };
export default projectModal;



