import { format } from "date-fns";


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