import { TodoList } from './todo';
import { Task } from './task';

describe('TodoList object', () => {
    let todoList;

    beforeEach(() => {
        todoList = new TodoList();
    });

    it('adds a new task', () => {
        todoList.addTask('Buy milk');
        expect(todoList.getTasks()).toEqual([new Task('Buy milk')]);
    });

    it('removes a task', () => {
        todoList.addTask('Buy milk');
        todoList.removeTask('Buy milk');
        expect(todoList.getTasks()).toEqual([]);
    });

    it('marks a task as completed', () => {
        todoList.addTask('Buy milk');
        todoList.markTaskCompleted('Buy milk');
        const tasks = todoList.getTasks();
        expect(tasks[0].completed).toBe(true);
    });

    it('updates a task description', () => {
        todoList.addTask('Buy milk');
        todoList.updateTaskDescription('Buy milk', 'Buy bread');
        const tasks = todoList.getTasks();
        expect(tasks[0].description).toBe('Buy bread');
    });

    it('gets all tasks', () => {
        todoList.addTask('Buy milk');
        todoList.addTask('Walk the dog');
        expect(todoList.getTasks()).toEqual([
            new Task('Buy milk'),
            new Task('Walk the dog'),
        ]);
    });
});
