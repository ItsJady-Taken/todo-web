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
                <p>This is a simple modal popup example.</p>
                <button id="modalButton">Okay</button>
            </div>
                
        `;
        document.getElementById('main-content').appendChild(modal);
        close = document.querySelector('.close');
    }
    return modal;
}
export default function createTodo() { 
    todoModal().style.display = "flex";
    setTimeout(() => todoModal().classList.add('show'), 10);
    close.onclick = ()=> {
        setTimeout(() => todoModal().style.display = "none", 300);
        todoModal().classList.remove('show');
    }
}