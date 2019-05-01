import {EventEmitter, Injectable, Output} from '@angular/core';
import {Todo} from './todo';
import { Subject } from 'rxjs';

@Injectable()
export class TodoDataService {
  // @Output() newTodoCreated = new EventEmitter<any>();
  @Output() newTodoCreated = new Subject();

    // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId = 0;

  // Placeholder for todos
  todos: Todo[] = [];
  todosDone: Todo[] = [];

  constructor() {}

  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    this.newTodoCreated.next(todo);

    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number, list: string): TodoDataService {
    if (list === 'list') {
      this.todos = this.todos.filter(todo => todo.id !== id);
    } else if (list === 'done_list') {
      this.todosDone = this.todosDone.filter(todo => todo.id !== id);
    }

    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  getAllDoneTodos(): Todo[] {
    return this.todosDone;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

  toggleTodoToDone(todo: Todo) {
    this.todosDone.push(todo);
  }
}
