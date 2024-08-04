const apiUrl = 'http://localhost:8080/todos';

document.addEventListener('DOMContentLoaded', fetchTodos);

function fetchTodos() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => renderTodos(data));
}

function renderTodos(todos) {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.task;
        if (todo.completed) {
            li.classList.add('completed');
        }
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => deleteTodo(todo.id);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}

function addTodo() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    if (task) {
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task })
        }).then(() => {
            input.value = '';
            fetchTodos();
        });
    }
}

function deleteTodo(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    }).then(fetchTodos);
}
