import mongoose from "mongoose";
import Task from "../../models/tasks";

const setupEnvironment = async () => {
  if (!process.env.MONGODB_HOST) {
    process.env.MONGODB_HOST = "mongodb://localhost:27017/todo_test";
  }
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_HOST, {});
    await Task.deleteMany();
  }
};

const tearDown = async () => {
  await Task.deleteMany();
  await mongoose.connection.close();
};

export { setupEnvironment, tearDown };
