import {AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TaskService} from "../services/task.service";
import {List} from "./list";
import {ActivatedRoute, Params} from "@angular/router";
import {Coordinate} from "../shared/coordinate.model";
import {Task} from '../shared/task.model';
import {CdkDragEnd} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-eisentomato',
  templateUrl: './eisentomato.component.html',
  styleUrls: ['./eisentomato.component.scss']
})
export class EisentomatoComponent implements OnInit {
  lists: List[];
  activeList: List;

  @Input() quadrantId: number;
  @ViewChild('wrapper') wrapper: ElementRef;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService) { }

  ngOnInit(): void {
    this.lists = this.taskService.getLists();

    this.route.queryParams
      .subscribe(
        (params: Params) => {
          this.setList(+params['id']);
        }
      );
  }

  public setList(listIndex: number) {
    if (listIndex) {
      this.activeList = this.taskService.getList(listIndex);
    } else {
      this.activeList = this.taskService.getList(0);
    }
  }
}
