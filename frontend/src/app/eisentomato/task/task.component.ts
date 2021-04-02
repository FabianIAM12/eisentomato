import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {CdkDragEnd} from "@angular/cdk/drag-drop";
import {TaskService} from "../../services/task.service";
import {Task} from 'src/app/shared/task.model';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements AfterViewInit {

  @Input() task: Task;
  @ViewChild('taskElement') taskElement: any;

  constructor(private taskService: TaskService) { }

  ngAfterViewInit(): void {
    this.taskElement.nativeElement.style.left = `${this.task.coordinate.x}.px`;
    this.taskElement.nativeElement.style.top = `${this.task.coordinate.y}.px`;
  }

  public draggedElement(event: CdkDragEnd) {
    /* ToDo: quadrantensystem überarbeiten */
    this.taskService.updateTaskPositionAndPriority(0, event.source.getRootElement(), event.source.getFreeDragPosition());
  }
}
