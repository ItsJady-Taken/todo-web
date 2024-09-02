const content = document.getElementById('content');

function showTodoContent(title, description, date, priority) {
    const todoContent = document.createElement('div');
    todoContent.classList.add('todo-content');

    todoContent.innerHTML = `
        <div class="todo-content-remove top-bottom">
            <button class="back-btn"><i class="fa-solid fa-arrow-left-long"></i></button> <button class="remove-project-btn" >Remove Todo</button>
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
    return todoContent;
}

export { showTodoContent };