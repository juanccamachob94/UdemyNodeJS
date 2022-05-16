const basePath = require('./../helpers/base_path')(1);
const Task = require(`${basePath}models/task`);

class Tasks {
  constructor() {
    this._collection = {};
  }

  createTask(description = '') {
    const task = new Task(description);
    this._collection[task.id] = task;
  }
}

module.exports = Tasks;
