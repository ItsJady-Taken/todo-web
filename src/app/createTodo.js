import { format, addDays } from "date-fns";
import { getProject } from "./createProject";

export default function showTodo() { 
    const formModal = document.getElementById('myModal');
    const close = document.querySelector('.close');
    formModal.style.display = "flex";
    setTimeout(() => formModal.classList.add('show'), 10);
    close.onclick = ()=> {
        setTimeout(() => formModal.style.display = "none", 300);
        formModal.classList.remove('show');
    }
}

const title = document.getElementById('todoTitle');
const description = document.getElementById('todoDescription');
const date = document.getElementById('todoDate');
const priority = document.getElementById('todoPriority');
const Chosenproject = document.getElementById('modal-project-dropdown-btn');

function createTodo() {
    const project = getProject(Chosenproject.textContent);
    
    const todoModal = document.createElement('li');
    todoModal.classList.add('todo-modal');
    todoModal.id = title.value;

    todoModal.innerHTML = `
            <div class="todo-modal-body">
                <input type="checkbox" name="${title.value}" id="${title.value}" value="check">    
                <div class="todo-modal-content">
                    <h3>${title.value}</h3>
                    <p>${description.value}</p>
                    <p>${date.value}</p>
                </div>     
            </div>
        `;
    const projectList = document.getElementById('project-todo-list');
    projectList.appendChild(todoModal);
    
}

function addTodo(title, description, date, priority, project) {
 
    return {
        title,
        description,
        date, 
        priority,
        project
    }
}



export { createTodo };