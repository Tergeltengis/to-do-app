import taskService from '../services/taskService'
import {Request, Response} from 'express'; 

const getTasks = async (request:Request, response:Response) => {
    try{
        response.send(await taskService.getTasks())
    } catch (error) {
        response.status(500).send(error)
    }
}

const createTask = async (request: Request, response:Response) => {
    try {
        response.send(await taskService.addTask(request))
    } catch (error) {
        response.status(500).send(error)
    }
}

const deleteTask = async (request: Request, response:Response) => {
    try {
        response.send(await taskService.deleteTask(request))
    } catch (error) {
        response.status(500).send(error)
    }
}

export default { getTasks, createTask, deleteTask}