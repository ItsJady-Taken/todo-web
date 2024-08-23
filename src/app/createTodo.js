import { format } from "date-fns";

let close;
let modal;
function todoModal() {
    if (!modal) {
        modal  = document.createElement('div');
        modal.classList.add('modal');
        modal.id = 'myModal';
        modal.innerHTML = `
        
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Create Todo</h2>
                <form id="todoForm" action="" method="post">
                    <input type="text" name="title" id="todoTitle" placeholder="Todo Title..." maxlength="25" required>
                    <textarea cols="30" rows="10" name="description" id="todoDescription" placeholder="Todo Description..." required></textarea>
                    <div class="three-inputs">
                        <input type="date" name="date" id="todoDate" placeholder="Todo Date" required>
                        
                        <select name="priority" id="todoPriority" required>
                            <option value="none">Priority (none)</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>  
                        </select>

                        <div class="modal-project-dropdown" id="modal-project-dropdown">
                            <button type="button">Project (none) <i class="fa-solid fa-arrow-down"></i></button>
                            <div class="modal-project-dropdown-content" id="modal-project-dropdown-content">
                            </div>
                        </div>

                    </div>
                    
                    <div style="display: flex; align-items: center">  
                        <input type="checkbox" name="check" id="check" value="check">
                        <label for="check" style="position: relative; bottom: 1px">Mark as completed</label>
                    </div>
                     <button type="submit" class="fa-button" id="modalButton" name="submit"><p>Create</p></button>
                </form>     
            </div>
                
        `;
        
        document.getElementById('main-content').appendChild(modal);
        close = document.querySelector('.close');
    }
    return modal;
}
export default function showTodo() { 
    todoModal().style.display = "flex";
    setTimeout(() => todoModal().classList.add('show'), 10);
    close.onclick = ()=> {
        setTimeout(() => todoModal().style.display = "none", 300);
        todoModal().classList.remove('show');
    }
}