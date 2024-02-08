import express from "express";
import cors from "cors";
import taskRouter from "./routes/routes";

const app = express();

//CORS Policy configuration
app.use(cors());

//Use Express
app.use(express.json());

//router
app.use(taskRouter);

app.get("/", (req, res) => {
  res.send("TO DO APP BACKEND SERVICE RUNNING");
});

export { app };
