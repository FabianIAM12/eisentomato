import {Coordinate} from "./coordinate.model";

export class Task {
  constructor(public title: string,
              public quadrant: number,
              public coordinate: Coordinate) {}
}
