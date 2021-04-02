import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../shared/task.model';
import {List} from "../list";

@Component({
  selector: 'quadrant',
  templateUrl: './quadrant.component.html',
  styleUrls: ['./quadrant.component.scss']
})
export class QuadrantComponent implements OnInit {
  tasks: Task[];
  @Input() activeList: List;
  @Input() quadrantId: number;

  public getTasks() {
    this.tasks = this.activeList.tasks.filter(task => task.quadrant === this.quadrantId);
  }

  constructor() { }

  ngOnInit(): void {
    this.getTasks()
  }

}
