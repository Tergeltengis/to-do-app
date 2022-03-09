import taskService from "../services/taskService";
import { Request, Response } from "express";

const getTasks = async (request: Request, response: Response) => {
  try {
    response.send(await taskService.getTasks());
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

const createTask = async (request: Request, response: Response) => {
  try {
    const result = await taskService.addTask(request);
    response.status(201).send(result);
  } catch (error) {
    response.status(400).send(error);
  }
};

const deleteTask = async (request: Request, response: Response) => {
  try {
    const result = await taskService.deleteTask(request);

    response.status(200).send({
      message: "Deleted successfully",
    });
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export default { getTasks, createTask, deleteTask };
