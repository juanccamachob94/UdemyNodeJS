require('colors');
const basePath = require('./../helpers/base_path')(1);
const { capitalize } = require(`${basePath}helpers/string`);
const { write } = require(`${basePath}helpers/terminal`);
const Task = require(`${basePath}models/task`);

class Tasks {
  constructor() {
    this._dictionary = {};
  }

  deleteTask(id) {
    if(this._dictionary[id])
      delete this._dictionary[id];
  }

  createTask(description = '') {
    const task = new Task(undefined, description);
    this._dictionary[task.id] = task;
  }

  printList(expectedStatus = undefined) {
    write('\n', false);
    let index = 1;
    this.list.forEach((task) => {
      const buildComplement = (expectedStatus, currentTask) => {
        if (expectedStatus === Task.statuses.completed)
          return currentTask.completedAt.green;
        return capitalize(currentTask.status)[currentTask.isCompleted() ? 'green' : 'red'];
      }
      if (expectedStatus && expectedStatus !== task.status)
        return;
      const taskIndex = `${index++}`.green;
      const complement = buildComplement(expectedStatus, task);
      write(`${taskIndex}. ${task.description} :: ${complement}`);
    });
    write('\n', false);
  }

  toggleCompletedTasks(ids = []) {
    ids.forEach(id => {
      const task = this._dictionary[id];
      if(!task.isCompleted())
        task.completedAt = new Date().toISOString();
    });
    this.list.forEach(task => {
      if(!ids.includes(task.id))
        this._dictionary[task.id].completedAt = null;
    });
  }

  /**
   * As property of the instance
  */
  get list() {
    let array = [];
    Object.keys(this._dictionary).forEach(key => array.push(this._dictionary[key]));
    return array;
  }

  loadsTasksfromArray(tasks = []) {
    tasks.forEach(task => this._dictionary[task.id] = Task.buildTask(task));
  }
}

module.exports = Tasks;
