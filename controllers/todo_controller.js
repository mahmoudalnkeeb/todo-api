const task = require('../models/task');

class Todo {
  async getAllTasks(req, res) {
    try {
      const todos = await task.find();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
  async addTask(req, res) {
    try {
      const text = req.body.text;
      const newTask = new task({
        text,
        isDone: false,
      });
      await task.create(newTask);
      res.status(200).json({ message: 'task created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
  async updateTask(req, res) {
    try {
      await task.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.status(200).json({ message: 'task updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
  async deleteTask(req, res) {
    try {
      await task.findOneAndDelete({ _id: req.params.id });
      res.status(200).json({ message: 'task deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
  async deleteAllTasks(req, res) {
    try {
      await task.deleteMany();
      res.status(200).json({ message: 'all tasks cleared' });
    } catch (error) {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
}

module.exports = Todo;
