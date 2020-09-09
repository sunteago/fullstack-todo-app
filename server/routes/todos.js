const express = require("express");
const auth = require("../middleware/auth");
const todosController = require("../controllers/todosController");
const router = express.Router();

router.get("/", auth, todosController.getTodos);

router.post("/create", auth, todosController.createTodoItem);

router.put("/:todoId", auth, todosController.updateTodoItem);

router.delete("/:todoId", auth, todosController.deleteTodoItem);

module.exports = router;
