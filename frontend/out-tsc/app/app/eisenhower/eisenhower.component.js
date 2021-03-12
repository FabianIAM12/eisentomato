import { __decorate, __metadata } from "tslib";
import { TodoDataService } from '../todo/todo-data.service';
import { Component } from '@angular/core';
import { Todo } from '../todo/todo';
var EisenhowerComponent = /** @class */ (function () {
    function EisenhowerComponent(todoDataService) {
        this.todoDataService = todoDataService;
        this.list = [];
    }
    EisenhowerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoDataService.newTodoCreated.subscribe({
            next: function (todo) { return _this.list.push(new Todo(todo)); }
        });
        this.todoDataService.newTodoDeleted.subscribe({
            next: function (todo) {
                var deleteObj = new Todo(todo);
                _this.list = _this.list.filter(function (todo) { return todo.id !== deleteObj.id; });
            }
        });
    };
    Object.defineProperty(EisenhowerComponent.prototype, "todos", {
        get: function () {
            return this.list;
        },
        enumerable: false,
        configurable: true
    });
    EisenhowerComponent = __decorate([
        Component({
            selector: 'app-eisenhower',
            templateUrl: 'eisenhower.html',
            styleUrls: ['eisenhower.scss'],
        }),
        __metadata("design:paramtypes", [TodoDataService])
    ], EisenhowerComponent);
    return EisenhowerComponent;
}());
export { EisenhowerComponent };
//# sourceMappingURL=eisenhower.component.js.map