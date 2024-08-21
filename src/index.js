import './styles/main.scss';
import './styles/sidebar.scss';
import './styles/content.scss';
import './styles/modal.scss';
import toggleSidebar from './app/sidebarToggle';
import showTodo from './app/createTodo';
import { createProjectModal } from './app/createProject';

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
addProject.addEventListener('keypress', (event)=> {
    if (event.key === 'Enter') {
        createProjectModal();
    }
})
