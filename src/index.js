import './styles/main.scss';
import './styles/sidebar.scss';
import './styles/content.scss';
import './styles/modal.scss';
import toggleSidebar from './app/sidebarToggle';
import showTodoForm, { createTodo, displayTodo, checkConditions, loadTodoContent } from './app/createTodo';
import { displayingProject, showProject, createProject } from './app/createProject';
import { showTodoContent } from "./app/showTodoContent";

// check if there is any project in local storage then show it
document.addEventListener('DOMContentLoaded', function() {
    const localStorageItems = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        localStorageItems[key] = value;
     } 
       
    for(const project in localStorageItems) { 
        showProject(project);  
        loadTodoContent(project);
    };
});

// toggles between sidebar closing and opening btn
document.getElementById('sidebar-toggle-btn').addEventListener('click', ()=> {
    toggleSidebar();
    document.getElementById('sidebar-toggle-btn').style.display = 'none';
})
document.getElementById('close-sidebar').addEventListener('click', ()=> {
    toggleSidebar();
    document.getElementById('sidebar-toggle-btn').style.display = 'block';
})

// show the form modal
document.getElementById('add-todo-btn').addEventListener('click', ()=> {
   showTodoForm();
})

// create project
const addProject = document.querySelector('#createProject');
addProject.addEventListener('keypress', (event)=> {
    if (event.key === 'Enter') {
        displayingProject(addProject);   
    }
})
 
 // create todo
const todoForm = document.getElementById('todoForm');
todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createTodo();
});  

// create a default project
const existProject = document.querySelector('#project-dropdown-content');
const existingProjects = Array.from(existProject.children).map(option => option.textContent);
if(!existingProjects.includes("Default")) {
   displayingProject("Default");
}
