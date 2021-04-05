import {AfterViewChecked, AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {CdkDragEnd, CdkDragMove} from "@angular/cdk/drag-drop";
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

  constructor(private taskService: TaskService) { }

  ngAfterViewInit(): void {
    this.initialPosition = this.task.coordinate;
    this.taskElement.nativeElement.style.left = `${this.initialPosition.x}.px`;
    this.taskElement.nativeElement.style.top = `${this.initialPosition.y}.px`;
  }

  public draggedElement(event: CdkDragEnd) {
    const eleRect = event.source.element.nativeElement.parentNode.parentElement.parentElement.parentElement.getBoundingClientRect();
    const targetRect = this.taskElement.nativeElement.getBoundingClientRect();
    // Calculate the top and left positions
    const top = eleRect.top - targetRect.top;
    const left = eleRect.left - targetRect.left;

    const position = new Coordinate(-left - 1, -top - this.taskElement.nativeElement.offsetHeight - 1);
    this.taskService.updateTaskPositionAndPriority(event.source.getRootElement(), position);
  }
}
