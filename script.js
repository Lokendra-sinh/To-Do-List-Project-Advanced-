const addTaskButton = document.querySelector('.addButton');

addTaskButton.addEventListener('click', addNewTask);

function addNewTask(event) {
  const inputText = document.querySelector('#taskInput');
  const inputTextValue = inputText.value;

  if (inputTextValue.trim() === '') {
    alert('Please enter a task!');
    return; // Exit the function if the input is empty
  }

  const newTask = document.createElement('li');
  const taskDetails = document.createElement('span');
  taskDetails.textContent = inputTextValue;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  deleteButton.addEventListener('click', function() {
    newTask.remove();
  })
  taskDetails.appendChild(deleteButton);
  newTask.appendChild(taskDetails);

  const taskListContainer = document.querySelector('ul');

  taskListContainer.appendChild(newTask);
  inputText.value = "";
}