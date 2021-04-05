import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Task} from '../../shared/task.model';
import {List} from "../list";

@Component({
  selector: 'quadrant',
  templateUrl: './quadrant.component.html',
  styleUrls: ['./quadrant.component.scss']
})
export class QuadrantComponent implements OnChanges {
  tasks: Task[];
  @Input() activeList: List;
  @Input() quadrantId: number;

  constructor() { }

  ngOnChanges(): void {
    this.tasks = this.activeList.tasks;
  }
}
