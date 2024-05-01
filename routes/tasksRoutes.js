const express = require("express");
const { getTasks, getTaskId, updateTask, addTask, deleteTask, markTaskOk } = require("../controllers/taskController");

const taskRouter = express.Router();

taskRouter.get('/', getTasks)
taskRouter.get('/:id?', getTaskId)
taskRouter.put('/:id?', updateTask)
taskRouter.post('/', addTask)
taskRouter.delete('/:id?', deleteTask)
taskRouter.patch('/:id?', markTaskOk)

module.exports = { taskRouter };