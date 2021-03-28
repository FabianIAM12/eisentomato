import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../shared/task.model';

@Component({
  selector: 'quadrant',
  templateUrl: './quadrant.component.html',
  styleUrls: ['./quadrant.component.scss']
})
export class QuadrantComponent implements OnInit {
  @Input() tasks: Task[];

  constructor() { }

  ngOnInit(): void { }

}
