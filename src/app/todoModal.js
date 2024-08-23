const title = document.getElementById('todoTitle');
const description = document.getElementById('todoDescription');
const date = document.getElementById('todoDate');
const priority = document.getElementById('todoPriority');
const modalDropdownBtn = document.getElementById('modal-project-dropdown-btn');

const content = document.querySelector('#content');
function projectModal(project) {
    const projectContent = document.createElement('div');
    projectContent.classList.add('project-content');
    projectContent.innerHTML = `
        <div class="project-content-title">
            <h2>Project: ${project.name}</h2> <button class="remove-project-btn" id="remove-project-btn">Remove Project</button>
        </div>
        <ul class="project-list">
        
        </ul>   
    
    `;

    content.appendChild(projectContent);
    return content;
}

export default projectModal;