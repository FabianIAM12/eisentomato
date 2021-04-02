import {Injectable, OnInit} from '@angular/core';
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
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130002', 'Dingeling', 1, new Coordinate(47, 22)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130003', 'Tim Te', 1, new Coordinate(7, 28)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130004', 'Blablaba', 1, new Coordinate(11, 22)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130005', 'Get to work', 2, new Coordinate(47, 22)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130006', 'Pick up groceries', 2, new Coordinate(54, 22)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130007', 'Go home', 2, new Coordinate(23, 22)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130008', 'Fall asleep', 2, new Coordinate(76, 22)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130009', 'Tim Taxis', 1, new Coordinate(87, 28)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130010', 'Hans', 3, new Coordinate(130, 28)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130011', 'Test12', 3, new Coordinate(150, 28)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130012', 'Blibla', 4, new Coordinate(180, 28)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130013', 'Test', 4, new Coordinate(130, 28))]),
    new List('Sport', [
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130009', 'Pumpe', 0, new Coordinate(20, 28)),
      new Task('58a4c892-8cba-11eb-8dcd-0242ac130010', 'Fussball', 0, new Coordinate(47, 22))])
  ];

  constructor() { }

  public dataObservable: BehaviorSubject<Task> = new BehaviorSubject<Task>(this.lists[0].tasks[0]);

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

    console.log(q2.length > 0);
    console.log(q2);
  }

  updateTaskPositionAndPriority(index, uuid: string, move: Coordinate) {
    const task = this.lists[index].tasks.find(task => task.uuid === uuid);

    task.coordinate.x += move.x;
    task.coordinate.y += move.y;

    this.setFocusTask(index);
  }
}
