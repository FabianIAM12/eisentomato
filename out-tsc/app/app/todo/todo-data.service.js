import * as tslib_1 from "tslib";
import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
var TodoDataService = /** @class */ (function () {
    function TodoDataService() {
        // @Output() newTodoCreated = new EventEmitter<any>();
        this.newTodoCreated = new Subject();
        this.newTodoDeleted = new Subject();
        // Placeholder for last id so we can simulate
        // automatic incrementing of ids
        this.lastId = 0;
        // Placeholder for todos
        this.todos = [];
        this.todosDone = [];
    }
    // Simulate POST /todos
    TodoDataService.prototype.addTodo = function (todo) {
        if (!todo.id) {
            todo.id = ++this.lastId;
        }
        this.todos.push(todo);
        this.newTodoCreated.next(todo);
        return this;
    };
    // Simulate DELETE /todos/:id
    TodoDataService.prototype.deleteTodo = function (delTodo, list) {
        if (list === 'list') {
            this.todos = this.todos.filter(function (todo) { return todo.id !== delTodo.id; });
            this.newTodoDeleted.next(delTodo);
        }
        else if (list === 'done_list') {
            this.todosDone = this.todosDone.filter(function (todo) { return todo.id !== delTodo.id; });
        }
        return this;
    };
    // Simulate PUT /todos/:id
    TodoDataService.prototype.updateTodoById = function (id, values) {
        if (values === void 0) { values = {}; }
        var todo = this.getTodoById(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    };
    // Simulate GET /todos
    TodoDataService.prototype.getAllTodos = function () {
        return this.todos;
    };
    TodoDataService.prototype.getAllDoneTodos = function () {
        return this.todosDone;
    };
    // Simulate GET /todos/:id
    TodoDataService.prototype.getTodoById = function (id) {
        return this.todos
            .filter(function (todo) { return todo.id === id; })
            .pop();
    };
    // Toggle todo complete
    TodoDataService.prototype.toggleTodoComplete = function (todo) {
        var updatedTodo = this.updateTodoById(todo.id, {
            complete: !todo.complete
        });
        return updatedTodo;
    };
    TodoDataService.prototype.toggleTodoToDone = function (todo) {
        this.todosDone.push(todo);
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TodoDataService.prototype, "newTodoCreated", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TodoDataService.prototype, "newTodoDeleted", void 0);
    TodoDataService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], TodoDataService);
    return TodoDataService;
}());
export { TodoDataService };
//# sourceMappingURL=todo-data.service.js.map