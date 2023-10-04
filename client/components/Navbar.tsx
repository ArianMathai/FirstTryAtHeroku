import React from "react";
import { Link, Route } from "react-router-dom";
import TaskApplication from "./TaskApplication";
import AddTaskForm from "./AddTaskForm";

function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/tasks/new"}>Add task</Link>
        </li>
        <li>
          <Link to={"/tasks"}>Tasks</Link>
        </li>
      </ul>
    </>
  );
}
export default Navbar;
