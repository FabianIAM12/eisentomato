import {Coordinate} from "./coordinate.model";

export class Task {
  constructor(public uuid: string,
              public title: string,
              public quadrant: number,
              public coordinate: Coordinate) {}
}
