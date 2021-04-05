import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';
import {Task} from '../../shared/task.model';
import {List} from "../list";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'quadrant',
  templateUrl: './quadrant.component.html',
  styleUrls: ['./quadrant.component.scss']
})
export class QuadrantComponent implements AfterViewInit {
  tasks: Task[];
  @Input() activeList: List;
  @Input() quadrantId: number;

  @ViewChild('quadrant') quadrant: ElementRef;

  constructor(private taskService: TaskService,
              private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.tasks = this.taskService.getQuadrantTasks(this.quadrant,
      this.activeList.tasks);
    this.cdRef.detectChanges();
  }
}
