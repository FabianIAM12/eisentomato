import {Component} from '@angular/core';
import {TodoDataService} from './todo/todo-data.service';
import {Todo} from './todo/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoDataService]
})
export class AppComponent {
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {}

  get todos() {
    console.log(this.todoDataService);
    return this.todoDataService.getAllTodos();
  }

  get done_todos() {
    return this.todoDataService.getAllDoneTodos();
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo;
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoToDone(todo);
    this.todoDataService.deleteTodoById(todo.id, 'list');
  }

  removeTodoFromDone(todo) {
    this.todoDataService.deleteTodoById(todo.id, 'done_list');
  }
}
