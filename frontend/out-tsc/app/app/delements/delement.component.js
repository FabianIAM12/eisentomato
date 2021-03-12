import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var DelementComponent = /** @class */ (function () {
    function DelementComponent() {
    }
    Object.defineProperty(DelementComponent.prototype, "task", {
        get: function () {
            return this._task;
        },
        set: function (task) {
            this._task = task;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Input('task'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DelementComponent.prototype, "task", null);
    DelementComponent = __decorate([
        Component({
            selector: 'app-delement',
            templateUrl: 'delement.html',
            styleUrls: ['delement.scss'],
        })
    ], DelementComponent);
    return DelementComponent;
}());
export { DelementComponent };
//# sourceMappingURL=delement.component.js.map