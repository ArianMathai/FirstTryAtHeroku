import { Form } from "react-router-dom";
import React, { FormEvent, useState } from "react";

function AddTaskForm() {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: { "content-type": "application/json" },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={"my-input-task"}>Title:</label>
        <input
          autoFocus={true}
          id="my-input-task"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </form>
  );
}

export default AddTaskForm;
