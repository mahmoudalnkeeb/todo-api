const Todo = require('../../controllers/todo_controller');
const { validateText } = require('../../middlewares/validation');
const router = require('express').Router();
const todo = new Todo();

router.get('/', todo.getAllTasks);
router.post('/', validateText, todo.addTask);
router.put('/:id', todo.updateTask);
router.delete('/:id', todo.deleteTask);
router.delete('/delete-all', todo.deleteAllTasks);


module.exports = router;
