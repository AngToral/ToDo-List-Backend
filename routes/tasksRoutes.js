const express = require("express");
const { getTasks, getTaskId, updateTask, addTask, deleteTask, markTaskOk, markTaskProg, markTaskPend } = require("../controllers/taskController");

const taskRouter = express.Router();

taskRouter.get('/', getTasks)
taskRouter.get('/:id?', getTaskId)
taskRouter.put('/:id?', updateTask)
taskRouter.post('/', addTask)
taskRouter.delete('/:id?', deleteTask)
taskRouter.patch('/ok/:id?', markTaskOk)
taskRouter.patch('/prog/:id?', markTaskProg)
taskRouter.patch('/pending/:id?', markTaskPend)

module.exports = { taskRouter };