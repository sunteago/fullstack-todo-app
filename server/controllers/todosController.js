const { v4: uuidv4 } = require("uuid");
const Todo = require("../models/Todo");

exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.findAll({
      attributes: ["uuid", "task", "done", "updatedAt"],
      limit: 10,
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json({ msg: "Succeed", data: todos });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "There was an error" });
  }
};

exports.createTodoItem = async (req, res, next) => {
  const task = req.body.task;
  const { userId, email } = req.user;
  if (!task) {
    return res.status(400).json({ msg: "Need a task to proceed" });
  }
  try {
    const createdTask = await Todo.create({ task, uuid: uuidv4(), userId });
    res.status(201).json({ msg: "Task created!", data: createdTask });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "There was an error" });
  }
};

exports.updateTodoItem = async (req, res, next) => {
  const todoId = req.params.todoId;
  const newTask = req.body.task;
  const done = req.body.done;

  if (!todoId) {
    return res.status(400).json({ msg: "Need a todo to proceed" });
  }
  if (!newTask || done === undefined) {
    return res
      .status(400)
      .json({ msg: "Todo is lacking data to update itself" });
  }

  try {
    const todo = await Todo.findOne({
      where: {
        uuid: todoId,
      },
    });

    todo.task = newTask;
    todo.done = done;
    await todo.save();
    return res.status(200).json({ msg: "Task updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "There was an error" });
  }
};

exports.deleteTodoItem = async (req, res, next) => {
  const todoId = req.params.todoId;
  if (!todoId) {
    return res.status(400).json({ msg: "Need a todo to proceed" });
  }
  try {
    const todo = await Todo.findOne({
      where: {
        uuid: todoId,
      },
    });

    await todo.destroy();
    return res.status(200).json({ msg: "Task deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "There was an error" });
  }
};
