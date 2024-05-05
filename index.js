const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');

// Function to create a new task
function createTask(taskContent) {
  const li = document.createElement('li');
  const completeButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  li.textContent = taskContent;
  completeButton.textContent = 'Complete';
  deleteButton.textContent = 'Delete';

  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  // Event listener to mark a task as completed
  completeButton.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  // Event listener to delete a task
  deleteButton.addEventListener('click', function() {
    li.remove();
  });
}

// Event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskContent = taskInput.value.trim();
  if (taskContent !== '') {
    createTask(taskContent);
    taskInput.value = '';
  } else {
    alert('Please enter a task!');
  }
});
