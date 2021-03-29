import {Component, OnInit} from '@angular/core';
import {Task} from 'src/app/shared/task.model';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor(private taskService: TaskService) {}

  public priorityTask: Task;

  ngOnInit(): void {
    this.onDataChangeReceived();
  }

  onDataChangeReceived = () => {
    this.taskService.dataObservable.subscribe((priorityTask: Task) => {
      this.priorityTask = priorityTask;
    });
  }
}

