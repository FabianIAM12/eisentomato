import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { TodoDataService } from './todo/todo-data.service';
import { Todo } from './todo/todo';
var AppComponent = /** @class */ (function () {
    function AppComponent(todoDataService) {
        this.todoDataService = todoDataService;
        this.newTodo = new Todo();
    }
    Object.defineProperty(AppComponent.prototype, "todos", {
        get: function () {
            return this.todoDataService.getAllTodos();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "done_todos", {
        get: function () {
            return this.todoDataService.getAllDoneTodos();
        },
        enumerable: false,
        configurable: true
    });
    AppComponent.prototype.addTodo = function () {
        if (this.newTodo.title !== '') {
            this.todoDataService.addTodo(this.newTodo);
            this.newTodo = new Todo;
        }
    };
    AppComponent.prototype.toggleTodoComplete = function (todo) {
        this.todoDataService.toggleTodoToDone(todo);
        this.todoDataService.deleteTodo(todo, 'list');
    };
    AppComponent.prototype.removeTodoFromDone = function (todo) {
        this.todoDataService.deleteTodo(todo, 'done_list');
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            providers: [TodoDataService]
        }),
        __metadata("design:paramtypes", [TodoDataService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map