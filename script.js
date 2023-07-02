const addTaskButton = document.querySelector(".addButton");
addTaskButton.addEventListener("click", addNewTask);

const taskListContainer = document.querySelector("ul");
let taskItems = [];

// Load tasks from localStorage on page load
window.onload = () => {
  const prevItems = localStorage.getItem('taskItems');
  if (prevItems) {
    try {
      const storedItems = JSON.parse(prevItems);
      storedItems.forEach((taskData) => {
        const taskElement = createTaskElement(taskData);
        taskItems.push(taskElement);
        taskListContainer.appendChild(taskElement);
      });
    } catch (error) {
      console.error("Error parsing task items from local storage:", error);
    }
  }
};

//Eventhandler function for adding new tasks to the taskcontainer

function addNewTask(event) {
  const inputText = document.querySelector("#taskInput");
  const inputTextValue = inputText.value.trim();

  if (inputTextValue === "") {
    alert("Please enter a task!");
    return;
  }

  const newTaskData = {
    id: Date.now(),
    details: inputTextValue,
    completed: false
  };

  const newTaskElement = createTaskElement(newTaskData);
  taskItems.push(newTaskElement);
  saveTasks();

  taskListContainer.appendChild(newTaskElement);
  inputText.value = "";
}

function createTaskElement(taskData) {
  const { id, details, completed } = taskData;

  const newTask = document.createElement("li");
  newTask.id = id;
  newTask.classList.add("slideIn");

  const taskDetails = document.createElement("span");
  taskDetails.textContent = details;

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";

  newTask.appendChild(taskDetails);
newTask.appendChild(taskCheckbox);
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.addEventListener("click", function () {
    newTask.classList.add("slideOut");
    setTimeout(function () {
      newTask.remove();
      const index = taskItems.findIndex((task) => task.id === id);
      if (index !== -1) {
        taskItems.splice(index, 1);
        saveTasks();
      }
    }, 500);
  });

  newTask.appendChild(deleteButton);

  if (completed) {
    newTask.classList.add("completed");
  }

  return newTask;
}

//function to save tasks in the localstorage 

function saveTasks() {
  localStorage.setItem('taskItems', JSON.stringify(taskItems.map((task) => ({
    id: task.id,
    details: task.querySelector('span').textContent,
    completed: task.classList.contains("completed")
  }))));
}
