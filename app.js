const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

// Cargar tareas guardadas
const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
savedTasks.forEach(addTaskToList);

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    addTaskToList(text);
    savedTasks.push(text);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
    input.value = '';
  }
});

function addTaskToList(task) {
  const li = document.createElement('li');
  li.textContent = task;
  list.appendChild(li);
}