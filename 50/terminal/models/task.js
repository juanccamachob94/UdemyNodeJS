const { v4: uuidv4 } = require('uuid');
const isPresent = require('is-present');

class Task {
  constructor(id = uuidv4(), description, completedAt = null) {
    this.id = id;
    this.description = description;
    this.completedAt = completedAt;
  }

  get status() {
    if(this.isCompleted())
      return Task.statuses.completed;
    return Task.statuses.pending;
  }

  isCompleted() {
    return isPresent(this.completedAt);
  }

  static get statuses() {
    return {
      'completed': 'completado',
      'pending': 'pendiente'
    }
  }

  static buildTask(taskJson) {
    return new Task(taskJson.id, taskJson.description, taskJson.completedAt);
  }
}

module.exports = Task;
