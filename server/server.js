import express from "express";
import bodyParser from "body-parser";
import { taskApi, createTasksRouter } from "./taskApi.js";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import * as path from "path";

dotenv.config();

const app = express();

app.use(bodyParser.json());

const url = process.env.MONGODB;
const client = new MongoClient(url);

client.connect().then((connection) => {
  const db = connection.db("applicationData");
  createTasksRouter(db);
});

app.use(taskApi);
app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET") {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

app.listen(process.env.PORT || 3000);
