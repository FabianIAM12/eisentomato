import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {CdkDragEnd} from "@angular/cdk/drag-drop";
import {TaskService} from "../../services/task.service";
import {Task} from 'src/app/shared/task.model';
import {Coordinate} from "../../shared/coordinate.model";

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements AfterViewInit {
  @Input() task: Task;
  @ViewChild('taskElement') taskElement: ElementRef;
  public initialPosition: Coordinate;

  constructor(private taskService: TaskService) {
  }

  ngAfterViewInit(): void {
    this.initialPosition = this.task.coordinate;
    this.taskElement.nativeElement.style.left = `${this.initialPosition.x}.px`;
    this.taskElement.nativeElement.style.top = `${this.initialPosition.y}.px`;
  }

  public draggedElement(event: CdkDragEnd) {
    const position = new Coordinate(this.initialPosition.x + event.source.getFreeDragPosition().x,
      this.initialPosition.y + event.source.getFreeDragPosition().y);
    this.taskService.updateTaskPositionAndPriority(event.source.getRootElement(), position);
  }
}
