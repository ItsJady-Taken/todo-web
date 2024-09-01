const content = document.getElementById('content');

function showTodoContent(title) {
    const todoContent = document.createElement('div');

    todoContent.innerHTML = `
        <div class="">
            <div><p><strong>Title:</strong></p><h2>${title}</h2></div>  
        </div>
        <div>
            <p><strong>Description:</strong></p>
        </div>
        <div>
            <p><strong>Date:</strong></p>
        </div>
        <div>
            <input type="checkbox" id="todoPriority"><button class="remove-project-btn" >Remove Project</button>
        </div>
       
    `;
    content.appendChild(todoContent);
    return todoContent;
}

export { showTodoContent };