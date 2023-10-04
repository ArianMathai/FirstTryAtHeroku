import request from "supertest";
import express from "express";
import { taskApi } from "../taskApi.js";

const app = express();
app.use(taskApi);

describe("Task api", () => {
  it("returns tasks", async () => {
    await request(app)
      .get("/api/tasks")
      .expect(200)
      .expect([
        { id: 1, title: "get server working (done)", status: "done" },
        { id: 2, title: "get heroku working", status: "todo" },
        { id: 3, title: "ball out of control", status: "todo" },
      ]);
  });
});
