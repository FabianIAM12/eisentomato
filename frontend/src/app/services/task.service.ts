import {ElementRef, Injectable} from '@angular/core';
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
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130001', 'Task1', 1, new Coordinate(0, 0)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130002', 'Task2', 1, new Coordinate(0, 0)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130003', 'Task3', 1, new Coordinate(340, 0)),
    ]), new List('Test', [
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130004', 'Test', 1, new Coordinate(0, 0)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130005', 'Teests2', 1, new Coordinate(0, 0)),
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

  findAndSort(tasks: Task[], side: number) {
    let newTasks = [];
    for (const task of tasks) {
      console.log(task);
      if (task.coordinate.x < side && task.coordinate.y < side) {
        newTasks.push(task);
      }
    }
    return newTasks;
  }

  getQuadrantTasks(quadrant: ElementRef, tasks: Task[]): Task[] {

    if (+quadrant.nativeElement.id === 1) {
      return this.findAndSort(tasks, quadrant.nativeElement.offsetHeight);
    }
    if (+quadrant.nativeElement.id === 2) {

    }
    if (+quadrant.nativeElement.id === 3) {

    }
    if (+quadrant.nativeElement.id === 4) {

    }
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

    /*
    const q2 = tasks.filter(task => task.quadrant === 2);
    const q4 = tasks.filter(task => task.quadrant === 4);
    const q1 = tasks.filter(task => task.quadrant === 1);
    const q3 = tasks.filter(task => task.quadrant === 3);
     */
  }

  updateTaskPositionAndPriority(rootElement: HTMLElement, position: Coordinate) {
    let quadrant =  1;

    for (const list of this.lists) {
      const task = list.tasks.find(task => task.uuid === rootElement.id);
      if (task) {
        task.coordinate = position;
        task.quadrant = quadrant;
        return;
      }
    }
  }
}
