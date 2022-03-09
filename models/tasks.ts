import mongoose from "mongoose";

const { Schema } = mongoose;
const taskSchema = new Schema({
  title: { type: String, required: true, unique: true },
  task: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false },
});
const Task = mongoose.model("tasks", taskSchema);
export default Task;
