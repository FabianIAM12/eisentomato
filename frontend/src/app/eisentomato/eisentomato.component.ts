import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TaskService} from "../services/task.service";
import {List} from "./list";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-eisentomato',
  templateUrl: './eisentomato.component.html',
  styleUrls: ['./eisentomato.component.scss']
})
export class EisentomatoComponent implements OnInit {
  lists: List[];

  @Input() quadrantId: number;
  @ViewChild('wrapper') wrapper: ElementRef;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService) {
  }

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
    this.taskService.listObservable.next(listIndex);
  }
}
