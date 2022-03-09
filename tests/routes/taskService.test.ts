import request from "supertest";
import { app } from "../../app";
import { setupEnvironment, tearDown } from "../testUtils/setupEnvironment";

beforeAll(async () => {
  await setupEnvironment();
});

afterAll(async () => {
  await tearDown();
});
describe("Testing task CRUD", () => {
  it("It should be empty list before saving objects", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.length).toBe(0);
  });

  it("It should response task object created", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({
        title: "First task",
        task: ["Task1", "Task2"],
      });
    expect(res.statusCode).toBe(201);
    const data = JSON.parse(res.text);

    expect(data.title).toBe("First task");
    expect(data.task).toStrictEqual(["Task1", "Task2"]);
  });

  it("Inserting duplicate title it should response 500", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({
        title: "First task",
        task: ["Task1", "Task2"],
      });
    expect(res.statusCode).toBe(400);
  });

  it("Inserting data with invalid body and it should return 400", async () => {
    const res = await request(app).post("/tasks").send({});
    expect(res.statusCode).toBe(400);
  });

  it("Delete row with given _id that previously store", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({
        title: "Task to be deleted",
        task: ["Task1", "Task2"],
      });
    expect(res.statusCode).toBe(201);

    const data = JSON.parse(res.text);
    expect(data._id).toBeDefined();

    const _id = data._id;
    const deleteResponse = await request(app).delete("/tasks").send({ _id });

    expect(deleteResponse.statusCode).toBe(200);
  });

  it("Try to delete not existing data and it should respond 404", async () => {
    const deleteResponse = await request(app)
      .delete("/tasks")
      .send({ _id: "Doesn't exist" });

    expect(deleteResponse.statusCode).toBe(500);
  });
});
