import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoDataService} from '../todo/todo-data.service';

@Component({
  selector: 'app-delement',
  templateUrl: 'delement.html',
  styleUrls: ['delement.scss'],
})
export class DelementComponent {
  private _task: string;

  get task(): string {
    return this._task;
  }

  @Input('task')
  set task(task: string) {
    this._task = task;
  }
}
