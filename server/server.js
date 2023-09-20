import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(express.static("../client/dist"));

app.get("/api/tasks", (req, res) => {
    res.json([
        {
           id: 1,
           title: "get server working (done)",
           status: "done"
        },
        {
            id: 2,
            title: "get heroku working",
            status: "todo"
        },
        {
            id: 3,
            title: "ball out of control",
            status: "todo"
        }
    ])
})


app.listen(process.env.PORT || 3000);
