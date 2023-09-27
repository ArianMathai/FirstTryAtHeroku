import express from "express";

export const taskApi = express.Router();

const TASKS = [
  {
    id: 1,
    title: "get server working (done)",
    status: "done",
  },
  {
    id: 2,
    title: "get heroku working",
    status: "todo",
  },
  {
    id: 3,
    title: "ball out of control",
    status: "todo",
  },
];
taskApi.get("/api/tasks", (req, res) => {
  res.json(TASKS);
});

taskApi.post("/api/tasks", (req, res) => {
  const { title } = req.body;
  TASKS.push({ title, id: TASKS.length + 1, status: "todo" });
  res.sendStatus(204);
});
