import { Task } from './task';

describe('Task object', () => {
    it('should mark a task as completed', () => {
        const task = new Task('Buy milk');
        task.markCompleted();
        expect(task.completed).toBe(true);
    });

    it('should update a task description', () => {
        const task = new Task('Buy milk');
        task.updateDescription('Buy cheese');
        expect(task.description).toBe('Buy cheese');
    });
});
