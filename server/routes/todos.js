const express = require("express");
const todosController = require("../controllers/todosController");
const router = express.Router();

router.get("/", todosController.getTodos);

router.post("/create", todosController.createTodoItem);

router.put("/:todoId", todosController.updateTodoItem);

router.delete("/:todoId", todosController.deleteTodoItem);

module.exports = router;
