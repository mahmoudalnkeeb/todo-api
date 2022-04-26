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
      task.create(newTask);
    } catch (error) {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
  async updateTask(req, res) {
    try {
      const id = req.body.id;
      const isDone = req.body.isDone;
      const updatedTask = await task.findByIdAndUpdate(
        { id },
        {
          isDone,
        }
      );
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
  async deletTask(req, res) {
    try {
      const id = req.body.id;
      task.findByIdAndDelete({ id });
      res.status(200).json({message:'task deleted successfully'});
    } catch (error) {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
}

module.exports = Todo