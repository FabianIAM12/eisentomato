import {Injectable} from '@angular/core';
import {List} from "../eisentomato/list";
import {Task} from "../shared/task.model";
import {Coordinate} from "../shared/coordinate.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public name: string;

  private lists: List[] = [
    new List('Job', [
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130001', 'Aquise', 1, new Coordinate(0, 0)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130002', 'Aquise2', 1, new Coordinate(0, 0)),
    ]), new List('Test', [
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130003', 'Test', 1, new Coordinate(0, 0)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130004', 'Teests2', 1, new Coordinate(0, 0)),
    ])];
  public dataObservable: BehaviorSubject<Task> = new BehaviorSubject<Task>(this.lists[0].tasks[0]);

  constructor() {
  }

  getLists() {
    return this.lists.slice();
  }

  getList(index: number) {
    return this.lists[index];
  }

  setQuadrantValueToObservable(tasks: Task[]) {
    if (tasks.length > 0) {
      const result = tasks.slice(-1).pop();
      this.dataObservable.next(result);
      return;
    }
  }

  setFocusTask(index) {
    /* description */
    // 1 = C = Deligate
    // 2 = A = Instant
    // 3 = D = Trash
    // 4 = B = Terminate and do
    const tasks = this.lists[index].tasks;

    const q2 = tasks.filter(task => task.quadrant === 2);
    const q4 = tasks.filter(task => task.quadrant === 4);
    const q1 = tasks.filter(task => task.quadrant === 1);
    const q3 = tasks.filter(task => task.quadrant === 3);
  }

  updateTaskPositionAndPriority(rootElement: HTMLElement, position: Coordinate) {
    for (const list of this.lists) {
      const task = list.tasks.find(task => task.uuid === rootElement.id);
      if (task) {
        task.coordinate = position;
        return;
      }
    }
  }
}
