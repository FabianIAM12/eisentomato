import {Injectable} from '@angular/core';
import {List} from "./eisentomato/list";
import {Task} from "./shared/task.model";
import {Coordinate} from "./shared/coordinate.model";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public name: string;
  public tasks: Task[];

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

  getLists() {
    return this.lists.slice();
  }

  getList(index: number) {
    return this.lists[index];
  }

  getTask(index, uuid: string): Task {
    return this.lists[index].tasks.find(task => task.uuid === uuid);
  }

  updateTask(index, uuid: string, move: Coordinate) {
    // console.log(this.lists[index].tasks.find(task => task.uuid === uuid).coordinate.x);
    // console.log(this.lists[index].tasks.find(task => task.uuid === uuid).coordinate.y);
    // console.log(coordinate);

    console.log(move.x);
    console.log(move.y);
    this.lists[index].tasks.find(task => task.uuid === uuid).coordinate.x += move.x;
    this.lists[index].tasks.find(task => task.uuid === uuid).coordinate.y += move.y;
  }
}
