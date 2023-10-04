import React, { useEffect, useState } from "react";

async function fetchJson(path: string) {
  const res = await fetch(path);
  return await res.json();
}
function ListTasks() {
  const [tasks, setTasks] = useState<{ title: string }[]>([]);

  async function loadTasks() {
    setTasks(await fetchJson("/api/tasks"));
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1>Tasks</h1>
      {tasks.map((t) => (
        <div>{t.title}</div>
      ))}
    </>
  );
}

export default ListTasks;
