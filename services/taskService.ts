import Task from "../models/tasks";
import { Request } from "express";

// export const getTaskByTitleService = (request: Request) => {
//   return Task.findById(request.body.title);
// };

export const getTasksService = () => {
  return Task.find({});
};

export const addTaskService = (request: Request) => {
  return new Task(request.body).save();
};

export const deleteTaskService = (request: Request) => {
  return Task.findByIdAndDelete(request.body._id);
};
