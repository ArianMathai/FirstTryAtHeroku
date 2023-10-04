import react from "react";
import ReactDOM from "react-dom/client";
import TaskApplication from "./components/TaskApplication";
import { BrowserRouter, HashRouter, Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TaskApplication />
  </BrowserRouter>,
);
