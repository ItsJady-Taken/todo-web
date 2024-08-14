export default function createTodo() { 

    const close = document.querySelector('.close');
    const modal = document.getElementById('myModal');
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add('show'), 10);
    close.onclick = ()=> {
        setTimeout(() => modal.style.display = "none", 300);
        modal.classList.remove('show');
    }
}