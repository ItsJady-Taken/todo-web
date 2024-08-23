const title = document.getElementById('todoTitle');
const description = document.getElementById('todoDescription');
const date = document.getElementById('todoDate');
const priority = document.getElementById('todoPriority');
const modalDropdownBtn = document.getElementById('modal-project-dropdown-btn');


function projectModal(project) {
    const content = document.querySelector('#content');

    const projectContent = document.createElement('div');
    projectContent.classList.add('project-content');
    projectContent.id = project.name;

    projectContent.innerHTML = `
        <div class="project-content-title">
            <h2>Project: ${project.name}</h2> <button class="remove-project-btn" id="remove-${projectContent.id}">Remove Project</button>
        </div>
        <ul class="project-list">
        
        </ul>   
    `;
    content.appendChild(projectContent);
   
    const removeProjectBtn = document.getElementById(`remove-${projectContent.id}`);
    removeProjectBtn.addEventListener('click', () => {
        const projectDropdownBtn = document.getElementById('project-dropdown-btn');
        const projectBtn = document.getElementById(`${project.name}-btn`);
        projectDropdownBtn.textContent = '';
        projectDropdownBtn.innerHTML = 'All Projects <i class="fa-solid fa-arrow-down-short-wide"></i>';
        projectBtn.remove();
        projectContent.remove();

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