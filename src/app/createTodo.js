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
    
    const todoModal = document.createElement('li');
    todoModal.classList.add('todo-modal');
    todoModal.id = `${title.replace(/ /g, '-')}-li`;

    todoModal.innerHTML = `
            <div class="todo-modal-body">  
                <input type="checkbox" name="${title}" id="${title}">
                <div class="todo-modal-content">
                    <h3>${title}:</h3>
                    <p class="description">${description}</p>
                    <p><strong>- Date:</strong> <em>[${date}]</em></p>
                    <p><strong>Priority:</strong> ${priority}</p>     
                </div>     
            </div>
    `;
    if (priority === 'low') {
        todoModal.style.backgroundColor = 'lightgreen';
    } else if (priority === 'medium') {
        todoModal.style.backgroundColor = 'yellow';
    } else if (priority === 'high') {
        todoModal.style.backgroundColor = 'red';
    }
    todoModal.addEventListener('click', (event) => {
       console.log("hello");
       
    });
    return todoModal;    
}


function createTodo() {
    const currentDate = new Date();
    const parsedDate = parseISO(date.value);

    if (isBefore(parsedDate, currentDate)) {
      return alert('You cannot enter past date.');
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
    const projectList = document.getElementById(`project-${project.name.replace(/\s+/g, '-')}-list`);  
    
    const existingTodo = Array.from(projectList.children).map(li => li.id); 
    if(existingTodo.includes(title.value)) {
        return alert('Todo task isalready exists');
    }
    
    else {
        // apend todo to the DOM
        projectList.appendChild(displayTodo(title.value, description.value, date.value, priority.value));

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

function loadTodoContent (project) {
    const projectList = document.querySelector(`#project-${project.replace(/\s+/g, '-')}-list`);
    const localStorageKey = `${project}`;
    const existingTodos = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    existingTodos.projects.forEach (function(todoItem) {
        const displayTodoContent = displayTodo(todoItem.title, todoItem.description, todoItem.date, todoItem.priority)
        displayTodoContent.classList.add('todo-item');
        projectList.appendChild(displayTodoContent);    
    });
}

export { createTodo, displayTodo, checkConditions, loadTodoContent };