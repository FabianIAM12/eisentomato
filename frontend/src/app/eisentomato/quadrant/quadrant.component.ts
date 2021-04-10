import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
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
export class QuadrantComponent implements AfterViewInit, OnInit, OnDestroy {
  tasks: Task[];
  @Input() quadrantId: number;
  @ViewChild('quadrant') quadrant: ElementRef;
  activeList: List;
  listIndex: number = 0;

  constructor(private taskService: TaskService,
              private cdRef: ChangeDetectorRef) { }

  getTasks(): void {
    this.activeList = this.taskService.getList(this.listIndex);
    this.tasks = this.taskService.getQuadrantTasks(+this.quadrant.nativeElement.id, this.activeList.tasks);
  }

  ngAfterViewInit(): void {
    this.getTasks();
    this.cdRef.detectChanges();
  }

  ngOnInit(): void {
    this.taskService.listObservable.subscribe(listIndex => {
      this.listIndex = listIndex;
      this.getTasks();
    });
  }

  ngOnDestroy(): void {
    this.taskService.listObservable.unsubscribe();
  }
}
