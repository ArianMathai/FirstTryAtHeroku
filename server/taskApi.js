import express from "express";

export const taskApi = express.Router();

export function createTasksRouter(db) {
  taskApi.get("/api/tasks", async (req, res) => {
    console.log("Inside /api/tasks");
    const tasks = await db
      .collection("tasks")
      .find()
      .filter({
        title: {
          $exists: true,
        },
      })
      .toArray();
    res.json(tasks);
  });

  taskApi.post("/api/tasks", async (req, res) => {
    const tasks = req.body;
    await db.collection("tasks").insertOne(tasks);
    res.sendStatus(204);
  });
}

/*

const TASKS = [
  {
    id: 1,
    title: "get server working",
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

 */
