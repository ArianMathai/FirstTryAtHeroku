import React, { useEffect, useState } from "react";
import { title } from "process";
import AddTaskForm from "./AddTaskForm";

async function fetchJson(path: string) {
  const res = await fetch(path);
  return await res.json();
}

function TaskApplication() {
  const [tasks, setTasks] = useState<{ title: string }[]>([]);

  async function loadTasks() {
    setTasks(await fetchJson("/api/tasks"));
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1>This is your Task App</h1>
      {tasks.map((t) => (
        <div>{t.title}</div>
      ))}
      <AddTaskForm />
    </>
  );
}

export default TaskApplication;
