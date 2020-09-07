const { v4: uuidv4 } = require('uuid');
const Todo = require('../models/Todo');

exports.createTodoItem = (req,res,next) => {
    const task = req.body.task;
    if (!task) {
        return res.status(400).json({msg: "Need a task to proceed"});
    }
    Todo.create({ task, uuid: uuidv4() });
    res.status(201).json({msg: "Task created!"});
}

exports.updateTodoItem = async (req, res, next) => {
    const todoId = req.params.todoId;
    const newTask = req.body.task;
    const done = req.body.done;

    if (!todoId) {
        return res.status(400).json({msg: "Need a todo to proceed"})
    }
    if (!newTask || done === undefined) {
        return res.status(400).json({msg: "Todo is lacking data to update itself"});
    }

    const todo = await Todo.findOne({
        where: {
            uuid: todoId
        }
    })

    todo.task = newTask;
    todo.done = done === 1 ? true : false;
    await todo.save();
    return res.status(200).json({msg: "Task updated successfully"})
}