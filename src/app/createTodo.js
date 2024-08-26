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
            <div class="todo-modal-content">
                
                <input type="checkbox" name="check" id="check" value="check">    
                <h2>${title.value}</h2>
                <p>${description.value}</p>
            </div>
        `;
    const projectList = document.getElementById('project-todo-list');
    projectList.appendChild(todoModal);
    
}

function addTodo(title, description, date, priority, project) {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    return {
        title,
        description,
        date, 
        priority,
        project
    }
}



export { createTodo };