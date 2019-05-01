import {TodoDataService} from '../todo/todo-data.service';
import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo/todo';

@Component({
  selector: 'app-eisenhower',
  templateUrl: 'eisenhower.html',
  styleUrls: ['eisenhower.scss'],
})
export class EisenhowerComponent implements OnInit {
  constructor(private todoDataService: TodoDataService) {}

  list: Todo[] = [];

  ngOnInit() {
      this.todoDataService.newTodoCreated.subscribe({
          next: (todo) => this.list.push(new Todo(todo))
      });

      this.todoDataService.newTodoDeleted.subscribe({
          next: (todo) => {
              const deleteObj = new Todo(todo);
              this.list = this.list.filter(todo => todo.id !== deleteObj.id);
          }
      });
  }

  get todos() {
    return this.list;
  }
}
