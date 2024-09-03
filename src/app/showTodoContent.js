import projectModal, { removeProjectFirstChild } from "./projectModal";
import { showProject } from "./createProject";
import { loadTodoContent } from "./createTodo";

const content = document.getElementById('content');
function showTodoContent(title, description, date, priority) {
    const todoContent = document.createElement('div');
    todoContent.classList.add('todo-content');
    todoContent.id = `todo-${title}-content`;

    todoContent.innerHTML = `
        <div class="todo-content-remove top-bottom">
            <button type="button" id="back-btn" class="back-btn"><i class="fa-solid fa-arrow-left-long"></i></button> 
            <button class="remove-project-btn" id="remove-${title}">Remove Todo</button>
        </div>
        <div class="todo-content-title">      
            <h1>${title}</h1>
        </div>
        <div class="todo-content-description">
           <textarea cols="70" rows="30" name="description" id="description" disabled>${description}</textarea>
        </div>
        <div class="todo-content-date">
            <p><strong>Date:</strong></p><p><em>[${date}]</em></p> 
            <p><strong>Priority:</strong></p><p>${priority}</p>
        </div>
        <div class="todo-content-edit top-bottom">
            <div style="display: flex; align-items: center;">
                <input type="checkbox" id="${title}-checkbox" class="todo-checkbox">
                <label for="${title}-checkbox">Finish</label> 
            </div>
            <button class="remove-project-btn" >Edit</button>
        </div>
       
    `;
    content.appendChild(todoContent);
    const projectDropdownBtn = document.querySelector('#project-dropdown-btn');
    const existingTodos = JSON.parse(localStorage.getItem(projectDropdownBtn.textContent)) || [];
    const backBtn = document.querySelector('#back-btn');
    backBtn.addEventListener('click', () => {  
        removeProjectFirstChild();  
        projectModal(existingTodos);
        loadTodoContent(projectDropdownBtn.textContent);
    });

    const removeTodoBtn = document.getElementById(`remove-${title}`);
     removeTodoBtn.addEventListener('click', () => {
        removeTodoContent(title);
        removeProjectFirstChild();
        projectModal(existingTodos);
        loadTodoContent(projectDropdownBtn.textContent);
     })
    return todoContent;
}

function removeTodoContent(title) {
    const projectDropdownBtn = document.querySelector('#project-dropdown-btn');
    const existingTodos = JSON.parse(localStorage.getItem(projectDropdownBtn.textContent)) || [];
    const targetTodo = existingTodos.projects.find(todo => todo.title === title);
        const index = existingTodos.projects.indexOf(targetTodo);
        console.log(targetTodo, index);
        existingTodos.projects.splice(index, 1);
        localStorage.setItem(projectDropdownBtn.textContent, JSON.stringify(existingTodos));
        
}

export { showTodoContent };