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
  public pointerPosition: Coordinate;

  constructor(private taskService: TaskService) {
  }

  ngAfterViewInit(): void {
    this.initialPosition = this.task.coordinate;

    this.taskElement.nativeElement.style.left = `${this.initialPosition.x}.px`;
    this.taskElement.nativeElement.style.top = `${this.initialPosition.y}.px`;
  }

  public draggedElement(event: CdkDragEnd) {
    const rootElement = event.source.getRootElement();
    const quadrantWidth = event.source.element.nativeElement.parentNode.parentElement.getBoundingClientRect().width;

    // position in quadrant
    const targetRect = this.taskElement.nativeElement.getBoundingClientRect();

    /* decide quadrant */
    const rectMain = event.source.element.nativeElement.parentNode.parentElement.parentElement.parentElement.getBoundingClientRect();
    const positionTotal = { x: (rectMain.top - targetRect.top) * -1, y: (rectMain.left - targetRect.left) *-1}

    let quadrantNr = 0;
    if (positionTotal.x < quadrantWidth) {
      if (positionTotal.y < quadrantWidth) {
        quadrantNr = 1;
      } else {
        quadrantNr = 2;
      }
    }

    if (positionTotal.x >= quadrantWidth) {
      if (positionTotal.y < quadrantWidth) {
        quadrantNr = 3;
      } else {
        quadrantNr = 4;
      }
    }

    const selectedQuadrant = document.getElementById(quadrantNr.toString()).getBoundingClientRect();
    let top = (selectedQuadrant.top - targetRect.top) * -1;
    let left = (selectedQuadrant.left - targetRect.left) * -1;

    const position = new Coordinate(left, top);
    this.pointerPosition = {x: targetRect.x, y: targetRect.y}
    this.taskService.updateTaskPositionAndPriority(rootElement, position, quadrantNr);
  }
}
