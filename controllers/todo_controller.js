const task = require('../models/task');

class Todo {
  async getAllTasks(req, res, next) {
    try {
      const todos = await task.find();
      res.status(200).json(todos);
      next();
    } catch (error) {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
  async addTask(req, res, next) {
    try {
      const text = req.body.text;
      const newTask = new task({
        text,
        isOpen: true,
      });
      const taskCreated = task.create(newTask);
      res.status(200).json(taskCreated);
      next();
    } catch (error) {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
  async updateTask(req, res, next) {
    try {
      const id = req.body.id;
      const isOpen = req.body.isOpen;
      const updatedTask = await task.findByIdAndUpdate(
        { id },
        {
          isOpen,
        }
      );
      res.status(200).json(updatedTask);
      next();
    } catch (error) {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
  async deletTask(req, res, next) {
    try {
      const id = req.body.id;
      task.findByIdAndDelete({ id });
      res.status(200).json({ message: 'task deleted successfully' });
      next();
    } catch (error) {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
}

module.exports = Todo;
