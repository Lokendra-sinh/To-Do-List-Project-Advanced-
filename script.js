  const addTaskButton = document.querySelector('.addButton');

  addTaskButton.addEventListener('click', addNewTask);

  function addNewTask(event) {
    const inputText = document.querySelector('#taskInput');
    const inputTextValue = inputText.value;

    if (inputTextValue.trim() === '') {
      alert('Please enter a task!');
      return; 
    }

    const newTask = document.createElement('li');
    

    const taskDetails = document.createElement('span');
    taskDetails.textContent = inputTextValue;

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

    newTask.classList.add('slideIn');

    deleteButton.addEventListener('click', function() {
      newTask.classList.add('slideOut');
      setTimeout(function() {
        newTask.remove();
      }, 500);
    });
    
    newTask.appendChild(taskDetails);
    newTask.appendChild(taskCheckbox);
    newTask.appendChild(deleteButton);

    const taskListContainer = document.querySelector('ul');

    taskListContainer.appendChild(newTask);
    inputText.value = "";
  }