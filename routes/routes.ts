import express from "express";
import taskController from "../controller/taskControllers";
const taskRouter = express.Router();

taskRouter.get("/tasks", taskController.getTasks);
taskRouter.post("/tasks", taskController.createTask);
taskRouter.delete("/tasks", taskController.deleteTask);

export default taskRouter;
