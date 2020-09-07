const express = require('express');
const todosController = require('../controllers/todosController');
const router = express.Router(); 

router.get('/', (req,res,next) => {})

router.post('/create', todosController.createTodoItem);

router.put('/:todoId', todosController.updateTodoItem);

module.exports = router;