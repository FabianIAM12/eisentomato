import * as tslib_1 from "tslib";
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
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input('task'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], DelementComponent.prototype, "task", null);
    DelementComponent = tslib_1.__decorate([
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