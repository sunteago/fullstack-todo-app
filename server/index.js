const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db");

const todosRoutes = require("./routes/todos");
const userRoutes = require("./routes/user");

const PORT = 4000;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/todos", todosRoutes);

app.use("/user", userRoutes);

sequelize
  .sync()
  .then(() => app.listen(PORT))
  .then(() => console.log(`Server listening at port ${PORT}`))
  .catch((err) => console.log("An error occurred", err));
