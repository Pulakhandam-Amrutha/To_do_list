function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");

    if (taskInput.value !== "") {
        // Create a new list item
        var listItem = document.createElement("li");

        // Create a span for the task text
        var taskText = document.createElement("span");
        taskText.textContent = taskInput.value;

        // Create a button for task removal
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append the task text and remove button to the list item
        listItem.appendChild(taskText);
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
}
