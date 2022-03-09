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
  it("It should be empty list", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.length).toBe(0);
  });

  it("It should response task object", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({
        title: "First task",
        task: ["Task1", "Task2"],
      });
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);

    expect(data.title).toBe("First task");
    expect(data.task).toStrictEqual(["Task1", "Task2"]);
  });
});
