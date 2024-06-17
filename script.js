let tasks = [];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleCompleted(index));
        listItem.appendChild(checkbox);

        const text = document.createElement('span');
        text.textContent = task.name;
        if (task.completed) {
            text.classList.add('completed');
        }
        listItem.appendChild(text);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(index));
        listItem.appendChild(deleteBtn);

        taskList.appendChild(listItem);
    });
}

function addTask() {
    const input = document.getElementById('taskInput');
    const taskName = input.value.trim();
    if (taskName === '') return;
    tasks.push({ name: taskName, completed: false });
    input.value = '';
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

renderTasks();
