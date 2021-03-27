import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EisentomatoComponent } from './eisentomato/eisentomato.component';
import {ListService} from "./list.service";
import {AppRoutingModule} from "./app.routing.module";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {TopListComponent} from "./eisentomato/top-list/top-list.component";
import {TaskComponent} from "./eisentomato/task/task.component";

@NgModule({
  declarations: [
    AppComponent,
    EisentomatoComponent,
    TopListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
