import React, { useEffect, useState } from "react";
import { title } from "process";
import AddTaskForm from "./AddTaskForm";
import Navbar from "./Navbar";
import MyRoutes from "./MyRoutes";

function TaskApplication() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <MyRoutes />
      </main>
      <footer>By Arian Mathai</footer>
    </>
  );
}

export default TaskApplication;
