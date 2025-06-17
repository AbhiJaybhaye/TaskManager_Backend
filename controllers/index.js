const { getTasks, createTask, updateTask, deleteTask, markTaskAsDone } = require("./Task.controller.js");

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  markTaskAsDone
};