import taskModel from '../models/tasks';
import {Request} from 'express'
const getTasks = () => {
    return taskModel.find({})
}

const addTask = (request: Request) => {
    return new taskModel(request.body).save()
}

const deleteTask = (request: Request) => {
    return taskModel.findByIdAndDelete(request.body._id)
}

export default {getTasks, addTask, deleteTask}