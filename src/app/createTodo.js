import { format, parseISO, isBefore } from "date-fns";
import { getProject } from "./createProject";


const title = document.getElementById('todoTitle');
const description = document.getElementById('todoDescription');
const date = document.getElementById('todoDate');
const priority = document.getElementById('todoPriority');
const Chosenproject = document.getElementById('modal-project-dropdown-btn');

export default function showTodoForm() { 
    const formModal = document.getElementById('myModal');
    const close = document.querySelector('.close');
    formModal.style.display = "flex";
    setTimeout(() => formModal.classList.add('show'), 10);
    close.onclick = ()=> {
        setTimeout(() => formModal.style.display = "none", 300);
        formModal.classList.remove('show');
    }
}

function displayTodo(title, description, date, priority) {
    
    const todoModal = document.createElement('div');
    todoModal.classList.add('todo-modal');
    todoModal.id = title.value;

    todoModal.innerHTML = `
            <div class="todo-modal-body">  
                <input type="checkbox" name="${title.value}" id="${title.value}">
                <div class="todo-modal-content">
                    <h3>${title.value}:</h3>
                    <p class="description">${description.value}</p>
                    <p><strong>- Date:</strong> <em>[${date.value}]</em></p>
                    <p><strong>Priority:</strong> ${priority.value}</p>     
                </div>     
            </div>
    `;
    if (priority.value === 'low') {
        todoModal.style.backgroundColor = 'lightgreen';
    } else if (priority.value === 'medium') {
        todoModal.style.backgroundColor = 'yellow';
    } else if (priority.value === 'high') {
        todoModal.style.backgroundColor = 'red';
    }
    const projectList = document.getElementById(`todo-content`);
    projectList.appendChild(todoModal);
    return todoModal;
}


function createTodo() {
    const currentDate = new Date();
    const parsedDate = parseISO(date.value);

    if (isBefore(parsedDate, currentDate)) {
      return alert('You cannot enter a date earlier than the current date.');
    }
    else if (Chosenproject.innerHTML == 'Project (none) <i class="fa-solid fa-arrow-down"></i>') {
        return alert('Please sleect a project');
    }
    else {
         const project = getProject(Chosenproject.textContent);
        checkConditions(project);
    }   
}


function checkConditions(project) {
    const storedProject = JSON.parse(localStorage.getItem(project.name));
    const projectList = document.getElementById(`content`);  
    
    const existingTodo = Array.from(projectList.children).map(li => li.id);
    if(existingTodo.includes(title.value)) {
        return alert('Todo task isalready exists');
    }
    
    else {
        // apend todo to the DOM
    displayTodo(title, description, date, priority);

       // create todo
        const newTodo = addTodo(title.value, description.value, date.value, priority.value);
        storedProject.projects.push(newTodo);

        // save to local storage
        localStorage.setItem(project.name, JSON.stringify(storedProject));
        
    }  
    
    
}

function addTodo(title, description, date, priority) { 
    return {
        title,
        description,
        date, 
        priority,
    }
}



export { createTodo, displayTodo };