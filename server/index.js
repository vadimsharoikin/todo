const tasks = require("./routes/tasks");
const connection = require("./db");
const express = require("express");
const app = express();

connection();

app.use(express.json());

app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
