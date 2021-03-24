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
    new List('Privat', [
      new Task('Katzenfutter', 0, new Coordinate(0, 0)),
      /* new Task('Muell raus', 0, new Coordinate(0, 0)) */]),
    new List('Job', [
      new Task('Aquise', 0, new Coordinate(20, 28)),
      new Task('Dingeling', 0, new Coordinate(47, 22))]),
    new List('Sport', [
      new Task('Pumpe', 0, new Coordinate(20, 28)),
      new Task('Fussball', 0, new Coordinate(47, 22))])
  ];

  constructor() { }

  getLists() {
    return this.lists.slice();
  }

  getList(index: number) {
    return this.lists[index];
  }
}
