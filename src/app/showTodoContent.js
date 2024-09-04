import projectModal, { removeProjectFirstChild } from "./projectModal";
import { showProject } from "./createProject";
import showTodoForm, { loadTodoContent } from "./createTodo";

const content = document.getElementById('content');
function showTodoContent(title, description, date, priority, Complete) {
    const todoContent = document.createElement('div');
    todoContent.classList.add('todo-content');
    todoContent.id = `todo-${title}-content`;

    todoContent.innerHTML = `
        <div class="todo-content-remove top-bottom">
            <button type="button" id="back-btn" class="back-btn"><i class="fa-solid fa-arrow-left-long"></i></button> 
            <div class="message" id="message"></div>
            <button class="remove-project-btn" id="remove-${title}">Remove Todo</button>
        </div>
        <div class="todo-content-title">   
            <input type="text" name="title" id="title" value="${title}">   
        </div>
        <div class="todo-content-description">
           <textarea cols="70" rows="30" name="description" id="description" >${description}</textarea>
        </div>
        <div class="todo-content-date">
            <p><strong>Date:</strong></p><p><em>[${date}]</em></p> 
            <p><strong>Priority:</strong></p><p>${priority}</p>
        </div>
        <div class="todo-content-edit top-bottom">
            <div style="display: flex; align-items: center;">
                <input type="checkbox" id="${title}-checkbox" class="todo-checkbox" ${Complete ? 'checked' : ''}>
                <label for="${title}-checkbox">Complete</label> 
            </div>
            <button class="remove-project-btn" id="edit-${title}">Save</button>
        </div>
       
    `;
    content.appendChild(todoContent);

    const projectDropdownBtn = document.querySelector('#project-dropdown-btn');
    const existingTodos = JSON.parse(localStorage.getItem(projectDropdownBtn.textContent)) || [];
    // back button
    const backBtn = document.querySelector('#back-btn');
    backBtn.addEventListener('click', () => {  
        removeProjectFirstChild();  
        projectModal(existingTodos);
        loadTodoContent(projectDropdownBtn.textContent);
    });
    // remove todo button
    const removeTodoBtn = document.getElementById(`remove-${title}`);
     removeTodoBtn.addEventListener('click', () => {
        removeTodoContent(title);
        removeProjectFirstChild();
        projectModal(existingTodos);
        loadTodoContent(projectDropdownBtn.textContent);
    })
    // edit todo button
    const saveEditBtn = document.getElementById(`edit-${title}`);
    saveEditBtn.addEventListener('click', () => {
        const textTitle = document.getElementById(`title`).value;
        const textarea = document.getElementById(`description`).value;
        const targetTodo = existingTodos.projects.find(todo => todo.title === title);
       
        if (targetTodo) {
            targetTodo.title = textTitle;
            targetTodo.description = textarea;
            localStorage.setItem(projectDropdownBtn.textContent, JSON.stringify(existingTodos));
        }
        removeProjectFirstChild();
        projectModal(existingTodos);
        loadTodoContent(projectDropdownBtn.textContent);
    })

    // checkbox
    const checkbox = document.getElementById(`${title}-checkbox`);
    const storedState = existingTodos.projects.find(todo => todo.title === title);
    checkbox.addEventListener('change', () => {
       if (storedState) {
            storedState.Complete = checkbox.checked;   
            localStorage.setItem(projectDropdownBtn.textContent, JSON.stringify(existingTodos));
       }
      
    })
    return todoContent;
}

function removeTodoContent(title) {
    const projectDropdownBtn = document.querySelector('#project-dropdown-btn');
    const existingTodos = JSON.parse(localStorage.getItem(projectDropdownBtn.textContent)) || [];
    const targetTodo = existingTodos.projects.find(todo => todo.title === title);
    const index = existingTodos.projects.indexOf(targetTodo);
    existingTodos.projects.splice(index, 1);
    localStorage.setItem(projectDropdownBtn.textContent, JSON.stringify(existingTodos));
}





export { showTodoContent };