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

  list: string[] = [];

  ngOnInit() {
      this.todoDataService.newTodoCreated.subscribe({
          next: (todo) => this.list.push(todo.title)
      });
  }

  get todos() {
    return this.list;
  }
}
