let todos = [];
let workingTasks = [];
let doneTasks = [];

// Get DOM
function get(selector) {
  return document.querySelector(selector);
}

// Add New Task with Enter Event
let newTaskInput = get("#addNewTask");
newTaskInput.onkeypress = (e) => {
  e.key === "Enter" && newTaskInput.value !== "" ? addNewTask() : "";
};

// Add New Task with Button Click
let newTaskBtn = get("#addTaskBtn");
newTaskBtn.onclick = (e) => {
  newTaskInput.value !== "" ? addNewTask() : "";
};

// Add New Task to toDoList Box
function addNewTask() {
  todos.push(newTaskInput.value);
  newTaskInput.value = "";
  renderTodo();
  console.log(todos);
}

// Render Todos
function renderTodo() {
  get(".todoList").innerHTML = "";

  for (let [index, todo] of todos.entries()) {
    console.log(index);
    get(".todoList").innerHTML += `<div id="todoForm">
    <input type="checkbox" />
    <p>${todo}</p>
    <button type="button" onclick="addWorkTask(this,${index})" class="add-btn">
      <ion-icon name="checkmark-circle-outline"></ion-icon>
    </button>
    <button type="button" onclick="deleteTodoTask(this,${index})" class="delete-btn">
      <ion-icon name="close-circle-outline"></ion-icon>
    </button>
  </div>
  `;
  }

  get("#modal").style.display = "none";
  console.log(todos);
}

// Clear Todos
function clearTodo(value, index) {
  index > -1
    ? (todos.splice(index, 1), renderTodo())
    : console.log("It is not found");
  console.log(todos);
}

// Render wordingTasks
function renderWorkingTask() {
  get(".workList").innerHTML = "";

  for (let [index, workTask] of workingTasks.entries()) {
    get(".workList").innerHTML += `<div id="todoForm">
    <input type="checkbox" />
    <p>${workTask}</p>
    <button type="button" onclick="addDoneTask(this,${index})" class="add-btn">
      <ion-icon name="checkmark-circle-outline"></ion-icon>
    </button>
    <button type="button" onclick="deleteWorkingTask(this,${index})" class="delete-btn">
      <ion-icon name="close-circle-outline"></ion-icon>
    </button>
  </div>`;
  }
}

// Clear workingTasks
function clearWorkingTask(value, index) {
  index > -1
    ? (workingTasks.splice(index, 1), renderWorkingTask())
    : console.log("It is not found");
  console.log(workingTasks);
}

// Render DoneTasks
function renderDoneTask() {
  get(".doneList").innerHTML = "";

  for (let [index, doneTask] of doneTasks.entries()) {
    get(".doneList").innerHTML += ` <div id="todoForm">
      <input type="checkbox" />
      <p>${doneTask}</p>
      <button type="button" onclick="deleteDoneTask(this,${index})" class="delete-btn">
        <ion-icon name="close-circle-outline"></ion-icon>
      </button>
    </div>`;
  }
}

// Delete DoneTasks
function clearDoneTask(value, index) {
  index > -1
    ? (doneTasks.splice(index, 1), renderDoneTask())
    : console.log("It is not found");
  console.log(doneTasks);
}

// Add Done Task
function addDoneTask(ele, index) {
  console.log(ele);
  let addDoneValue = workingTasks[index];
  doneTasks.push(addDoneValue);
  console.log(doneTasks);

  renderDoneTask();
  clearWorkingTask(addDoneValue, index);
}

// Add Working Task
function addWorkTask(ele, index) {
  let addTaskValue = todos[index];
  workingTasks.push(addTaskValue);
  console.log(workingTasks);

  renderWorkingTask();
  clearTodo(addTaskValue, index);
}

// Delete Todo Task
function deleteTodoTask(ele, index) {
  console.log(index);
  get("#modal").style.display = "block";

  get(".cancel").onclick = (e) => {
    get("#modal").style.display = "none";
  };

  get(".delete").onclick = (e) => {
    index > -1
      ? (todos.splice(index, 1), renderTodo())
      : console.log("It is not found!");
  };
}

// Delete WorkingTask
function deleteWorkingTask(ele, index) {
  let addTaskValue = workingTasks[index];
  todos.push(addTaskValue);
  renderTodo();
  clearWorkingTask(addTaskValue, index);
}

// Delete Done Task
function deleteDoneTask(ele, index) {
  let addTaskValue = doneTasks[index];
  workingTasks.push(addTaskValue);
  renderWorkingTask();
  clearDoneTask(addTaskValue, index);
}

// Display Date Function
function displayDate() {
  let date = new Date().getDate();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[new Date().getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[new Date().getMonth()];
  let fullYear = new Date().getFullYear();
  console.log(date, day, fullYear, month);

  get("#date").textContent = `${day}, ${month}, ${fullYear}`;
}
displayDate();
