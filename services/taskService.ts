import Task from "../models/tasks";
import { Request } from "express";

const getTasks = () => {
  return Task.find({});
};

const addTask = (request: Request) => {
  return new Task(request.body).save();
};

const deleteTask = (request: Request) => {
  return Task.findByIdAndDelete(request.body._id);
};

export default { getTasks, addTask, deleteTask };
