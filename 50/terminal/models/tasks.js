require('colors');
const basePath = require('./../helpers/base_path')(1);
const { capitalize } = require(`${basePath}helpers/string`);
const { write } = require(`${basePath}helpers/terminal`);
const Task = require(`${basePath}models/task`);

class Tasks {
  constructor() {
    this._dictionary = {};
  }

  createTask(description = '') {
    const task = new Task(description);
    this._dictionary[task.id] = task;
  }

  printList() {
    write('\n', false);
    this.list.forEach((task, index) => {
      const taskIndex = `${index + 1}`.green;
      const status = capitalize(task.status)[task.isCompleted() ? 'green' : 'red'];
      write(`${taskIndex}. ${task.description} :: ${status}`);
    });
    write('\n', false);
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
