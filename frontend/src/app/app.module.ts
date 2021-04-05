import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EisentomatoComponent } from './eisentomato/eisentomato.component';
import {TaskService} from "./services/task.service";
import {AppRoutingModule} from "./app.routing.module";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {TopListComponent} from "./eisentomato/top-list/top-list.component";
import {TaskComponent} from "./eisentomato/task/task.component";
import {QuadrantComponent} from "./eisentomato/quadrant/quadrant.component";
import {TimerComponent} from "./eisentomato/timer/timer.component";
import {FooterComponent} from "./eisentomato/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    EisentomatoComponent,
    TopListComponent,
    TaskComponent,
    QuadrantComponent,
    TimerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
