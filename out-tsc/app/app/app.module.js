import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EisenhowerComponent } from './eisenhower/eisenhower.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DelementComponent } from './delements/delement.component';
import { TodoDataService } from './todo/todo-data.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                EisenhowerComponent,
                DelementComponent,
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                FormsModule,
                BrowserAnimationsModule,
                DragDropModule
            ],
            providers: [TodoDataService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map