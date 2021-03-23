import { Task } from '../shared/task.model';

export class List {
  public name: string;
  public tasks: Task[];

  constructor(name: string, tasks: Task[]) {
    this.name = name;
    this.tasks = tasks;
  }
}
