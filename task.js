export class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }

    markCompleted() {
        this.completed = true;
    }

    updateDescription(newDescription) {
        this.description = newDescription;
    }
}
