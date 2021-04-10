import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';
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
    const rootElement = event.source.getRootElement();

    const quadrantWidth = rootElement.parentNode.parentElement.getBoundingClientRect().width;
    const targetRect = rootElement.getBoundingClientRect();

    /* decide which quadrant task is in */
    const rectMain = rootElement.parentNode.parentElement.parentElement.parentElement.getBoundingClientRect();
    const positionTotal = {x: (rectMain.left - targetRect.left) * -1, y: (rectMain.top - targetRect.top) * -1};

    // set relative position
    console.log(positionTotal.x / rootElement.parentNode.parentElement.parentElement.parentElement.getBoundingClientRect().width);
    console.log(positionTotal.y / rootElement.parentNode.parentElement.parentElement.parentElement.getBoundingClientRect().height);

    let quadrantNr = 0;
    if (positionTotal.x < quadrantWidth) {
      if (positionTotal.y < quadrantWidth) {
        quadrantNr = 1;
      } else {
        quadrantNr = 3;
      }
    }

    if (positionTotal.x >= quadrantWidth) {
      if (positionTotal.y < quadrantWidth) {
        quadrantNr = 2;
      } else {
        quadrantNr = 4;
      }
    }

    // position in selected quadrant
    const selectedQuadrant = document.getElementById(quadrantNr.toString()).getBoundingClientRect();
    let top = (selectedQuadrant.top - targetRect.top) * -1;
    let left = (selectedQuadrant.left - targetRect.left) * -1;
    const position = new Coordinate(Math.round(left), Math.round(top));

    this.taskService.updateTaskPositionAndPriority(rootElement.id, position, quadrantNr);
  }
}
