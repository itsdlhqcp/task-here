const taskInput = document.getElementById("task-input");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-items");
const clearAll = document.querySelector(".clear-tasks");
const searchInput = document.querySelector("#search");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // get the value from the input filed trim
  const taskText = taskInput.value.trim();
  // check id the value of the input is not empty
  if (taskInput.value !== "") {
    // create li
    const newLi = document.createElement("li");
    newLi.className = "task";
    newLi.style.margin = ".5rem 0rem";

    // create an input field
    const task = document.createElement("input");
    task.disabled = true;
    task.type = "text";
    task.className = "taskDisabled";
    // make the value of the input to be our text
    task.value = taskText;
    // create a button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "Delete";

    // create an edit button
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.innerText = "Edit";

    // append the input text
    newLi.appendChild(task);
    newLi.appendChild(deleteBtn);
    newLi.appendChild(editBtn);
    taskList.appendChild(newLi);

    taskInput.value = "";
  } else {
    const err = document.querySelector(".err");
    // err.style.background = "blue";
    err.style.display = "block";
    setTimeout(() => {
      err.style.display = "none";
    }, 2000);
  }
});

taskList.addEventListener("click", (e) => {
  //  get the paren of the button
  // check if the target is the delete button
  if (e.target.classList.contains("delete-btn")) {
    // remove the parent
    e.target.parentElement.remove();
  }
});
// edit
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    console.log(e.target.parentElement);
    const input = e.target.parentElement.querySelector('input[type="text"]');
    input.disabled = !input.disabled;
    if (!input.disabled) {
      input.focus();
    }
  }
});

clearAll.addEventListener("click", function (e) {
  e.preventDefault();
  taskList.innerHTML = "";
});

// Add an event listener to the search input field
searchInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  let searchedWord = e.target.value.toLowerCase();

  const taskItems = document.querySelectorAll(".task");
  taskItems.forEach((taskItem) => {
    let taskText = taskItem.querySelector(".taskDisabled").value.toLowerCase();

    if (taskText.indexOf(searchedWord) !== -1) {
      taskItem.style.display = "block";
    } else {
      taskItem.style.display = "none";
    }
  });
});
