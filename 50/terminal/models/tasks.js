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

  get collectionArr() {
    let array = [];
    Object.keys(this._collection).forEach(key => array.push(this._collection[key]));
    return array;
  }

  loadsTasksfromArray(tasks = []) {
    tasks.forEach(task => this._collection[task.id] = task);
  }
}

module.exports = Tasks;
