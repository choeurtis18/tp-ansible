const API_URL = '/todos';

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Fetch and display todos
async function fetchTodos() {
    const response = await fetch(API_URL);
    const todos = await response.json();
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = "flex items-center justify-between";

        const span = document.createElement('span');
        span.textContent = todo.title;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = "bg-red-500 text-white px-2 py-1 rounded";
        deleteButton.addEventListener('click', async () => {
            await deleteTodo(todo.id);
            fetchTodos();
        });

        li.appendChild(span);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}

// Add a new todo
todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = todoInput.value;
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
    });
    todoInput.value = '';
    fetchTodos();
});

// Delete a todo
async function deleteTodo(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
}

// Initialize
fetchTodos();
