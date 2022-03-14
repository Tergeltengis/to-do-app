import express from "express";
import {
  getTasks,
  createTask,
  deleteTask,
} from "../controller/taskControllers";
const taskRouter = express.Router();

taskRouter.get("/tasks", getTasks);
taskRouter.post("/tasks", createTask);
taskRouter.delete("/tasks", deleteTask);

export default taskRouter;
