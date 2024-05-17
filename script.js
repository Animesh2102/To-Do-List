let taskList = [];

document.getElementById("addTaskButton").addEventListener("click", addTask);
document.getElementById("markAllCompleteButton").addEventListener("click", markAllComplete);
document.getElementById("clearAllTasksButton").addEventListener("click", clearAllTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task !== "") {
        taskList.push({task: task, completed: false});
        displayTasks();
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}

function markTaskComplete(index) {
    taskList[index].completed = true;
    displayTasks();
}

function markAllComplete() {
    taskList.forEach(task => task.completed = true);
    displayTasks();
}

function clearAllTasks() {
    taskList = [];
    displayTasks();
}

function displayTasks() {
    let taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";

    taskList.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task.task;

        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";
        deleteButton.onclick = () => deleteTask(index);

        let completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = () => markTaskComplete(index);

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskListElement.appendChild(li);
    });
}
