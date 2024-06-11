import { Task } from './task';

export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const task = new Task(description);
        this.tasks.push(task);
    }

    removeTask(description) {
        this.tasks = this.tasks.filter(
            (task) => task.description !== description
        );
    }

    markTaskCompleted(description) {
        const task = this.tasks.find(
            (task) => task.description === description
        );
        if (task) {
            task.markCompleted();
        }
    }

    getTasks() {
        return this.tasks;
    }

    updateTaskDescription(oldDescription, newDescription) {
        const task = this.tasks.find(
            (task) => task.description === oldDescription
        );
        if (task) {
            task.updateDescription(newDescription);
        }
    }
}
