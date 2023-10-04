import { Form, useNavigate } from "react-router-dom";
import React, { FormEvent, useState } from "react";
import navbar from "./Navbar";

function AddTaskForm() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate(); // navigation

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: { "content-type": "application/json" },
    });
    navigate("/"); // navigation back to homepage
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
