const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db");

const todosRoutes = require("./routes/todos");

const PORT = 4000;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/todos", todosRoutes);

sequelize
  .sync()
  .then(() => app.listen(PORT))
  .then(() => console.log(`Server listening at port ${PORT}`))
  .catch((err) => console.log("An error occured", err));
