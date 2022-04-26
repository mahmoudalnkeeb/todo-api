const  Todo  = require('../../controllers/todo_controller');

const router = require('express').Router();
const todo = new Todo();

router.get('/', todo.getAllTasks);
router.post('/', todo.addTask);
router.put('/', todo.updateTask);
router.delete('/', todo.deletTask);

module.exports = router;
