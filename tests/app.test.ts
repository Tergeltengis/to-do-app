import request from "supertest";
import "babel-polyfill";
import { app } from "../app";
import { setupEnvironment, tearDown } from "./utils/setupEnvironment";

beforeAll(async () => {
  await setupEnvironment();
});

afterAll(async () => {
  await tearDown();
});

describe("Test the root path content", () => {
  it("It should response the GET text", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("TO DO APP BACKEND SERVICE RUNNING");
  });
});
