import { format, addDays } from "date-fns";


export default function showTodo() { 
    const todo_Modal = document.getElementById('myModal');
    const close = document.querySelector('.close');
    todo_Modal.style.display = "flex";
    setTimeout(() => todo_Modal.classList.add('show'), 10);
    close.onclick = ()=> {
        setTimeout(() => todo_Modal.style.display = "none", 300);
        todo_Modal.classList.remove('show');
    }
}

const title = document.getElementById('todoTitle');
const description = document.getElementById('todoDescription');
const date = document.getElementById('todoDate');
const priority = document.getElementById('todoPriority');
const modalProjectDropdownBtn = document.getElementById('modal-project-dropdown-btn'); 

const todoForm = document.getElementById('todoForm');
function createTodo(project) {
    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        console.log(title.value, description.value, date.value, priority.value, project.projects);
    })
}

function addTodo(title, description, date, priority, project) {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    return {
        title,
        description,
        date: formattedDate, 
        priority,
        project
    }
}



export { createTodo };