import express from "express";

import taskController from '../controller/taskControllers'
const taskRouter = express.Router();

taskRouter.get('/tasks', taskController.getTasks )
taskRouter.post('/createtask', taskController.createTask)
taskRouter.delete('/deletetask', taskController.deleteTask)

export default taskRouter;