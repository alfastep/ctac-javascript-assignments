let taskManager = (function () {
  let tasks = [];

  function addTask(description) {
    tasks.push(description);
  }

  function displayTasks() {
    tasks.forEach(task => console.log(task));
  }

  return {
    addTask: addTask,
    displayTasks: displayTasks
  };
})();

taskManager.addTask('Take out trash.');
taskManager.addTask('Go to the grocery store.');
taskManager.addTask('Cook dinner.');
taskManager.displayTasks();