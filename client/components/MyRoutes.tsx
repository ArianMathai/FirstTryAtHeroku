import { Route, Routes } from "react-router-dom";
import TaskApplication from "./TaskApplication";
import AddTaskForm from "./AddTaskForm";
import ListTasks from "./ListTasks";
import React from "react";

function MyRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<h1>HOME</h1>}></Route>
      <Route path={"/tasks"} element={<ListTasks />} />
      <Route path={"/tasks/new"} element={<AddTaskForm />} />
      <Route path={"*"} element={<h1>NOT FOUND</h1>} />
    </Routes>
  );
}

export default MyRoutes;
