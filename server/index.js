const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db");

const Todo = require("./models/Todo");
const User = require("./models/User");

const todosRoutes = require("./routes/todos");
const userRoutes = require("./routes/user");

const PORT = 4000;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/todos", todosRoutes);

app.use("/user", userRoutes);

Todo.belongsTo(User);

sequelize
  .sync()
  .then(() => app.listen(PORT))
  .then(() => console.log(`Server listening at port ${PORT}`))
  .catch((err) => console.log("An error occurred", err));
