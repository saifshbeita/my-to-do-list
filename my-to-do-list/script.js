let taskList = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(taskList));
}

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';

  taskList.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.done ? 'completed' : '';
    li.innerHTML = `
      ${task.text}
      <span>
        <button onclick="toggleTask(${index})">✅</button>
        <button onclick="deleteTask(${index})">🗑️</button>
      </span>
    `;
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (text) {
    taskList.push({ text, done: false });
    saveTasks();
    renderTasks();
    input.value = '';
  }
}

function toggleTask(index) {
  taskList[index].done = !taskList[index].done;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  saveTasks();
  renderTasks();
}

renderTasks();
