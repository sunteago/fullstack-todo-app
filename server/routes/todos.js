const express = require('express');
const todosController = require('../controllers/todosController');
const router = express.Router(); 

router.get('/', (req,res,next) => {})

router.post('/create', todosController.createTodoItem);

module.exports = router;