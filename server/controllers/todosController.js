const Todo = require('../models/Todo');

exports.createTodoItem = (req,res,next) => {
    const task = req.body.task;
    if (!task) return res.status(400).json({msg: "Need a task to proceed"})
    Todo.create({
        task
    })
    res.status(200).json({msg: "Task created!"});
}