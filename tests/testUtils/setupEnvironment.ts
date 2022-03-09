import mongoose from "mongoose";
import Task from "../../models/tasks";

const setupEnvironment = async () => {
  if (process.env.NODE_ENV === "test") {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }
    process.env.MONGODB_HOST = "mongodb://localhost:27017/todo_test";
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_HOST, {});
      await Task.remove();
    }
  }
};

const tearDown = async () => {
  if (mongoose.connection.readyState !== 0) {
    await Task.remove();
    await mongoose.connection.close();
  }
};

export { setupEnvironment, tearDown };
