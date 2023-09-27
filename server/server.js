import express from "express";
import bodyParser from "body-parser";
import { taskApi } from "./taskApi.js";

const app = express();

app.use(bodyParser.json());
app.use(taskApi);
app.use(express.static("../client/dist"));

app.listen(process.env.PORT || 3000);
