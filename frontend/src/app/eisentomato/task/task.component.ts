import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CdkDragEnd} from "@angular/cdk/drag-drop";
import {Coordinate} from "../../shared/coordinate.model";
import {ListService} from "../../list.service";
import { Task } from 'src/app/shared/task.model';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements AfterViewInit {

  constructor(private listService: ListService) { }

  @Input() task: Task;
  moved2: any;

  ngAfterViewInit(): void {
    const task = document.getElementById(this.task.uuid);
    task.style.left = `${this.task.coordinate.x}.px`;
    task.style.top = `${this.task.coordinate.y}.px`;
  }

  public updateTaskPosition(uuid: string, position: Coordinate) {
    this.listService.updateTask(0, uuid, position);
  }

  public draggedElement(event: CdkDragEnd) {
    this.updateTaskPosition(event.source.getRootElement().id, event.source.getFreeDragPosition());
  }

}
