import './styles/main.scss';
import './styles/sidebar.scss';
import './styles/content.scss';
import './styles/modal.scss';
import toggleSidebar from './app/sidebarToggle';
import showTodo from './app/createTodo';
import { showProject, createProject } from './app/createProject';

// toggles between sidebar closing and opening btn
document.getElementById('sidebar-toggle-btn').addEventListener('click', ()=> {
    toggleSidebar();
    document.getElementById('sidebar-toggle-btn').style.display = 'none';
})
document.getElementById('close-sidebar').addEventListener('click', ()=> {
    toggleSidebar();
    document.getElementById('sidebar-toggle-btn').style.display = 'block';
})

// Create todo 
document.getElementById('add-todo-btn').addEventListener('click', ()=> {
   showTodo();
})

// create project
const addProject = document.querySelector('#createProject');
const existProject = document.querySelector('#project-dropdown-content');
addProject.addEventListener('keypress', (event)=> {
    if (event.key === 'Enter') {
        if (!addProject.value) return;
        const newProject = addProject.value.trim();
        showTodo();

        const existingProjects = Array.from(existProject.children).map(option => option.textContent);
        if(!existingProjects.includes(newProject)) {
            const project = createProject(newProject);
            showProject(project.name);
        }    
        addProject.value = '';
    }
})
